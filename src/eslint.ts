/**
 * Lint rules that keep the library's escape hatches auditable, for projects
 * that use it:
 *
 * ```js
 * import typedTypst from 'typed-typst/eslint'
 * export default [
 *   {
 *     plugins: { 'typed-typst': typedTypst },
 *     rules: { 'typed-typst/unsafe-raw': 'error', 'typed-typst/literal-path': 'error' },
 *   },
 * ]
 * ```
 *
 * - `unsafe-raw`: every mention of `unsafeRaw` is a tagged template whose text
 *   is written in the source, ``unsafeRaw.code`…` `` or
 *   ``unsafeRaw.code({ x })`…` ``, with no `${…}` and with variables in an object
 *   literal without spread or computed keys. An alias, a renamed or namespace
 *   import, destructuring, `.call`, `Reflect.apply` or a cast is reported, as
 *   each could carry text from a variable.
 * - `literal-path`: `path`, `includeFile` and `importFile` (imported under any
 *   name) take a string literal, never a value the program computes; for one,
 *   `unsafePath` is the explicit, greppable way.
 *
 * The rules follow names, not values: a function that leaves the module other
 * than through its name (`Object.values(await import('typed-typst'))`) is not
 * seen. They are a tripwire for review, with the runtime checks behind them.
 */

/** An ESTree node, as ESLint gives it. */
type Node = any

/** The part of ESLint's rule context the rules use. */
interface Context {
  readonly sourceCode: {
    getScope(node: Node): { references: Node[] }
    getDeclaredVariables(node: Node): { references: { identifier: Node }[] }[]
  }
  report(descriptor: { node: Node; message: string }): void
}

interface Rule {
  readonly meta: { readonly type: 'problem'; readonly schema: []; readonly docs: { readonly description: string } }
  create(context: Context): Record<string, (node: Node) => void>
}

// eslint-disable-next-line typed-typst/unsafe-raw -- the rule's own name for it
const NAME = 'unsafeRaw'
const TAGS = new Set(['code', 'markup', 'math'])
const NO_SUBSTITUTIONS = 'unsafeRaw takes no ${…}: pass values as variables, unsafeRaw.code({ x })`…`'
const TAGGED = 'unsafeRaw is only allowed as a tagged template: unsafeRaw.code`…` or unsafeRaw.code({ x })`…`'

const isPlainMember = (n: Node, object: Node): boolean =>
  n?.type === 'MemberExpression' && n.object === object && !n.computed

/** The name of an import or export specifier part: `x` or `'x'`. */
const specName = (n: Node): unknown => (n.type === 'Identifier' ? n.name : n.type === 'Literal' ? n.value : null)

/** A library module, as users import it. */
const isLibrary = (source: unknown): boolean =>
  typeof source === 'string' && (source === 'typed-typst' || source.startsWith('typed-typst/'))

/** Keys of types, classes and enums: names, not references. */
const KEY_OF = new Set([
  'PropertyDefinition',
  'MethodDefinition',
  'AccessorProperty',
  'TSAbstractPropertyDefinition',
  'TSAbstractMethodDefinition',
  'TSPropertySignature',
  'TSMethodSignature',
])

const isVariablesObject = (arg: Node): boolean =>
  arg?.type === 'ObjectExpression' &&
  (arg.properties as Node[]).every((p) => p.type === 'Property' && !p.computed && p.kind === 'init')

/** Why this mention of `unsafeRaw` is not an allowed use, or null when it is. */
function misuse(id: Node): string | null {
  const parent = id.parent
  switch (parent.type) {
    case 'ImportSpecifier':
      return specName(parent.imported) === NAME && parent.local.name === NAME
        ? null
        : 'import unsafeRaw under its own name'
    case 'ExportSpecifier':
      return specName(parent.local) === NAME && specName(parent.exported) === NAME
        ? null
        : 'export unsafeRaw under its own name'
    case 'TSTypeQuery':
      return null
    case 'TSQualifiedName': {
      // `typeof unsafeRaw.math.block` is a type; `import u = tt.unsafeRaw` is not.
      let n = id
      while (n.parent.type === 'TSQualifiedName' && n.parent.left === n) n = n.parent
      if (n !== id && n.parent.type === 'TSTypeQuery') return null
      break
    }
    case 'VariableDeclarator':
      // Its own definition (`export const unsafeRaw = …`); any other declaration of the name is an alias.
      return parent.id === id && parent.parent.parent?.type === 'ExportNamedDeclaration'
        ? null
        : 'do not declare or alias unsafeRaw'
    case 'MemberExpression':
      if (parent.property === id) return 'import unsafeRaw by name, not through a namespace'
  }
  // unsafeRaw.code, .markup, .math or .math.block
  let tag = parent
  if (!isPlainMember(tag, id) || !TAGS.has(tag.property.name))
    return 'use unsafeRaw.code, .markup, .math or .math.block'
  if (tag.property.name === 'math' && isPlainMember(tag.parent, tag) && tag.parent.property.name === 'block')
    tag = tag.parent
  const up = tag.parent
  if (up.type === 'TaggedTemplateExpression' && up.tag === tag)
    return up.quasi.expressions.length ? NO_SUBSTITUTIONS : null
  if (up.type === 'CallExpression' && up.callee === tag && !up.optional) {
    if (up.arguments.length !== 1 || !isVariablesObject(up.arguments[0]))
      return 'unsafeRaw variables must be an object literal without spread or computed keys: unsafeRaw.code({ x })`…`'
    const tagged = up.parent
    if (tagged.type === 'TaggedTemplateExpression' && tagged.tag === up)
      return tagged.quasi.expressions.length ? NO_SUBSTITUTIONS : null
  }
  return TAGGED
}

/** A value stored in a variable, a default or an assignment (through `as const` or `satisfies`). */
function heldAsValue(node: Node): boolean {
  let n = node
  while (n.parent.type === 'TSAsExpression' || n.parent.type === 'TSSatisfiesExpression') n = n.parent
  const p = n.parent
  return (
    (p.type === 'VariableDeclarator' && p.init === n) ||
    (p.type === 'AssignmentExpression' && p.right === n) ||
    (p.type === 'AssignmentPattern' && p.right === n) ||
    (p.type === 'PropertyDefinition' && p.value === n)
  )
}

const unsafeRawRule: Rule = {
  meta: {
    type: 'problem',
    schema: [],
    docs: { description: 'unsafeRaw only as a tagged template written in the source' },
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name !== NAME) return
        const p = node.parent
        // A key that is no reference (`{ unsafeRaw: 1 }`) is no use…
        if (
          p.type === 'Property' &&
          p.key === node &&
          !p.computed &&
          !p.shorthand &&
          p.parent.type === 'ObjectExpression'
        )
          return
        // …but destructuring it out of the module is (`const { unsafeRaw: u } = tt`).
        if (p.type === 'Property' && p.key === node && p.parent.type === 'ObjectPattern')
          return context.report({ node, message: 'import unsafeRaw by name, not through destructuring' })
        if ((KEY_OF.has(p.type) && p.key === node && !p.computed) || (p.type === 'TSEnumMember' && p.id === node))
          return
        const message = misuse(node)
        if (message) context.report({ node, message })
      },
      // import { 'unsafeRaw' as u }, export { 'unsafeRaw' as u } from …, const { 'unsafeRaw': u } = m:
      // the name as a string is a reference too.
      'Literal, TemplateLiteral'(node) {
        const value =
          node.type === 'Literal' ? node.value : node.expressions.length ? null : node.quasis[0].value.cooked
        if (value !== NAME) return
        const p = node.parent
        if (p.type === 'ImportSpecifier' || p.type === 'ExportSpecifier') {
          const message = misuse(node)
          if (message) context.report({ node, message })
        } else if (p.type === 'Property' && p.key === node && p.parent.type === 'ObjectPattern') {
          context.report({ node, message: 'import unsafeRaw by name, not through destructuring' })
        } else if (heldAsValue(node)) {
          // The name kept in a variable (`const k = 'unsafeRaw'`, then `ns[k]`) could read it from any
          // namespace, also one that re-exports the library.
          context.report({ node, message: 'do not keep the name unsafeRaw in a variable: import it by name' })
        }
      },
      // A namespace of the library is read only as tt.name, so that each name is seen.
      ImportNamespaceSpecifier(node) {
        if (isLibrary(node.parent.source.value)) checkNamespace(context, node)
      },
      TSImportEqualsDeclaration(node) {
        const ref = node.moduleReference
        if (ref.type === 'TSExternalModuleReference' && isLibrary(ref.expression.value)) checkNamespace(context, node)
      },
      ImportExpression(node) {
        if (node.source.type !== 'Literal' || !isLibrary(node.source.value)) return
        const up = node.parent
        const ok =
          up.type === 'AwaitExpression' &&
          ((up.parent.type === 'MemberExpression' && up.parent.object === up && !up.parent.computed) ||
            (up.parent.type === 'VariableDeclarator' &&
              up.parent.init === up &&
              up.parent.id.type === 'ObjectPattern' &&
              (up.parent.id.properties as Node[]).every(
                (q) => q.type === 'Property' && !q.computed && q.key.type === 'Identifier',
              )))
        if (!ok)
          context.report({
            node,
            message: "import('typed-typst') only as (await import(…)).name or const { name } = await import(…)",
          })
      },
      // tt['unsafeRaw'], tt[`unsafeRaw`]
      'MemberExpression[computed=true]'(node) {
        const k = node.property
        const name =
          k.type === 'Literal'
            ? k.value
            : k.type === 'TemplateLiteral' && !k.expressions.length
              ? k.quasis[0].value.cooked
              : null
        if (name === NAME) context.report({ node, message: 'import unsafeRaw by name, not through a namespace' })
      },
    }
  },
}

function checkNamespace(context: Context, decl: Node): void {
  for (const v of context.sourceCode.getDeclaredVariables(decl))
    for (const { identifier: id } of v.references) {
      const p = id.parent
      const ok =
        (p.type === 'MemberExpression' && p.object === id && !p.computed) ||
        (p.type === 'TSQualifiedName' && p.left === id) ||
        p.type === 'TSTypeQuery'
      if (!ok) context.report({ node: id, message: 'read a typed-typst namespace only as ns.name' })
    }
}

const FILE_FUNCTIONS = new Set(['path', 'includeFile', 'importFile'])

/** A literal path: a string, a template without `${…}`, `'a' as const`, or `c ? 'a' : 'b'` of those. */
const isLiteralArg = (arg: Node): boolean =>
  (arg?.type === 'Literal' && typeof arg.value === 'string') ||
  (arg?.type === 'TemplateLiteral' && !arg.expressions.length) ||
  ((arg?.type === 'TSAsExpression' || arg?.type === 'TSSatisfiesExpression') && isLiteralArg(arg.expression)) ||
  (arg?.type === 'ConditionalExpression' && isLiteralArg(arg.consequent) && isLiteralArg(arg.alternate))

const literalPathRule: Rule = {
  meta: { type: 'problem', schema: [], docs: { description: 'file paths only as literals written in the source' } },
  create(context) {
    /** `ref` names the file function `name`: it must be called right there, with a literal. */
    const check = (ref: Node, name: string) => {
      const call = ref.parent
      // `typeof path`, and a re-export under the same name (its importers are checked in turn).
      if (call.type === 'TSTypeQuery') return
      if (call.type === 'ExportSpecifier' && specName(call.exported) === name) return
      const message =
        call.type !== 'CallExpression' || call.callee !== ref
          ? `call ${name} directly, with a literal path; for a path the program computes, use unsafePath`
          : // `path<'a.png'>(value)`: the type argument lets a value of type `any` (JSON.parse) pass as the literal.
            call.typeArguments || call.typeParameters
            ? `${name} takes no type arguments: they let any value pass as the literal path`
            : isLiteralArg(call.arguments[0])
              ? null
              : `${name} takes a literal path, written in the source; for a path the program computes, use unsafePath`
      if (message) context.report({ node: ref, message })
    }
    return {
      // The imported function under any local name (`import { path as p }`, `import { 'path' as p }`):
      // every reference, not only calls, so that an alias or a cast cannot hide one.
      ImportSpecifier(node) {
        const name = specName(node.imported)
        if (typeof name !== 'string' || !FILE_FUNCTIONS.has(name)) return
        for (const v of context.sourceCode.getDeclaredVariables(node))
          for (const { identifier } of v.references) check(identifier, name)
      },
      // tt.path(…) for a namespace of the library.
      MemberExpression(node) {
        if (node.computed || !FILE_FUNCTIONS.has(node.property.name) || node.object.type !== 'Identifier') return
        const ref = context.sourceCode.getScope(node).references.find((r: Node) => r.identifier === node.object)
        const def = ref?.resolved?.defs[0]
        const ns =
          (def?.type === 'ImportBinding' &&
            def.node.type === 'ImportNamespaceSpecifier' &&
            isLibrary(def.parent.source.value)) ||
          (def?.type === 'ImportBinding' && def.node.type === 'TSImportEqualsDeclaration')
        if (ns) check(node, node.property.name)
      },
      // const { path: p } = await import('typed-typst')
      Property(node) {
        const pattern = node.parent
        const init =
          pattern.type === 'ObjectPattern' && pattern.parent.type === 'VariableDeclarator' ? pattern.parent.init : null
        if (
          init?.type !== 'AwaitExpression' ||
          init.argument.type !== 'ImportExpression' ||
          !isLibrary(init.argument.source.value)
        )
          return
        const key = node.computed ? null : specName(node.key)
        if (typeof key === 'string' && FILE_FUNCTIONS.has(key))
          context.report({ node, message: `import ${key} statically and call it with a literal path` })
      },
      // An unresolved global of that name (no import in this file).
      CallExpression(node) {
        if (node.callee.type !== 'Identifier' || !FILE_FUNCTIONS.has(node.callee.name)) return
        const ref = context.sourceCode.getScope(node).references.find((r: Node) => r.identifier === node.callee)
        if (!ref?.resolved) check(node.callee, node.callee.name)
      },
    }
  },
}

/** The ESLint plugin: `typed-typst/unsafe-raw` and `typed-typst/literal-path`. */
const plugin: {
  readonly meta: { readonly name: string }
  readonly rules: { readonly 'unsafe-raw': Rule; readonly 'literal-path': Rule }
} = {
  meta: { name: 'typed-typst' },
  rules: { 'unsafe-raw': unsafeRawRule, 'literal-path': literalPathRule },
}
export default plugin
