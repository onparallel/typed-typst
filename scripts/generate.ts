/**
 * Generates src/gen/std.ts from the reflection spec and the overlay.
 *
 * Usage: node scripts/generate.ts
 */
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import {
  exclude,
  openNamed as openNamedOverlay,
  params as patches,
  shapes,
  strings,
  values as valuesOverlay,
  variants as variantsOverlay,
  type Flags,
  type ParamPatch,
  type Shape,
} from '../spec/overlay.ts'

const VERSION = readFileSync(new URL('../typst-version', import.meta.url), 'utf8').trim()
const specPath = new URL(`../spec/typst-${VERSION}.json`, import.meta.url)
const raw = readFileSync(specPath, 'utf8')

type Leaf = { kind: 'any' } | { kind: 'type'; type: string } | { kind: 'value'; type: string; value: unknown }
type Cast = Leaf | { kind: 'union'; of: Cast[] }
interface SpecParam extends Flags {
  name: string
  docs: string
  input: Cast
  variadic: boolean
  default?: { repr: string }
}
interface SpecFunc {
  path: string
  docs: string
  element: boolean
  contextual: boolean | null
  returns: Cast | null
  params: SpecParam[]
  deprecation: string | null
}
interface Spec {
  typst: string
  functions: SpecFunc[]
  types: { path: string }[]
}

const spec = JSON.parse(raw) as Spec
if (spec.typst !== VERSION) throw new Error(`spec is for Typst ${spec.typst}, typst-version says ${VERSION}`)
const byPath = new Map(spec.functions.map((f) => [f.path, f]))
/** The overlay entries the generation used: one that names nothing in the spec fails (see the end). */
const usedOverlay = new Set<string>()

const camel = (s: string) => s.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
const pascal = (s: string) =>
  s
    .split(/[.-]/)
    .map((p) => p[0]!.toUpperCase() + p.slice(1))
    .join('')
/**
 * Marks a top-level call as free of side effects, so that bundlers drop the
 * definitions a program does not use. Only `installMethods` has an effect.
 */
const PURE = '/* @__PURE__ */ '

const RESERVED = new Set([
  'enum',
  'super',
  'in',
  'new',
  'delete',
  'default',
  'function',
  'class',
  'arguments',
  'eval',
  'import',
  'export',
  'return',
  'this',
  'void',
  'with',
  'yield',
])
const jsName = (path: string) => {
  const name = camel(path.replaceAll('.', '-'))
  return RESERVED.has(name) ? name + '_' : name
}
const doc = (s: string, indent = '') => {
  // Typst's docs mention references (`@outline`), which TSDoc would read as tags.
  const text = s
    .replace(/\*\//g, '*​/')
    .replace(/(^|\s)@(?=\w)/g, '$1\\@')
    .replace(/\s+/g, ' ')
    .trim()
  return text ? `${indent}/** ${text} */\n` : ''
}

function flatten(cast: Cast): Leaf[] {
  return cast.kind === 'union' ? cast.of.flatMap(flatten) : [cast]
}

/** The TS input type of a parameter. */
function tsInput(cast: Cast, shape: Shape | undefined, where: string): string {
  const parts = new Set<string>()
  // A string where Typst also takes a path is a file path: a path must come from `path('…')`,
  // never from data, or data would choose which file the document reads.
  const takesPath = flatten(cast).some((c) => c.kind === 'type' && c.type === 'path')
  for (const c of flatten(cast)) {
    if (takesPath && c.kind === 'type' && c.type === 'str') continue
    if (c.kind === 'any') parts.add('TypstValue')
    else if (c.kind === 'value')
      parts.add(c.type === 'str' ? JSON.stringify(c.value) : inputOfType(c.type, shape, where))
    else parts.add(inputOfType(c.type, shape, where))
  }
  const names = flatten(cast).flatMap((c) => (c.kind === 'value' && c.type === 'str' ? [JSON.stringify(c.value)] : []))
  // One of some strings (`scope: "column" | "parent"`): also a string that only Typst knows (a parameter's value).
  // Where another string would be a file, only a string known to be one of the names (`T.oneOf`).
  if (names.length) parts.add(takesPath ? `OneOf<${names.join(' | ')}>` : "Expr<'str'>")
  return [...parts].join(' | ')
}

function inputOfType(type: string, shape: Shape | undefined, where: string): string {
  switch (type) {
    case 'none':
      return 'null'
    case 'auto':
      return 'Auto'
    case 'bool':
      return "boolean | Expr<'bool'>"
    case 'int':
      return "number | Expr<'int'>"
    case 'float':
      return "number | Expr<'int' | 'float'>"
    case 'str':
      return "string | Expr<'str'>"
    case 'path':
      return "Expr<'path'>"
    case 'content':
      return 'ContentArg'
    case 'length':
      return 'Length'
    case 'ratio':
      return 'Ratio'
    case 'relative':
      return 'Relative'
    case 'fraction':
      return 'Fraction'
    case 'label':
      return 'Label'
    // A value computed in Typst (`data(…)`, a field, a result) is accepted too.
    case 'dictionary':
      return `${shape?.dictionary ?? 'DictArg'} | Expr<'dictionary'>`
    case 'array':
      return `${shape?.array ?? 'readonly TypstValue[]'} | Expr<'array'>`
    case 'function':
      return shape?.function ?? 'TypstFn'
    case 'type':
      return "Expr<'type'> | TypstType"
    default:
      if (!/^[a-z]+$/.test(type)) throw new Error(`${where}: unexpected type ${type}`)
      return `Expr<'${type}'>`
  }
}

/** The Typst type names of a value (for fields and results). */
function typeNames(cast: Cast | null): string {
  if (!cast) return 'string'
  const names = new Set<string>()
  for (const c of flatten(cast)) names.add(c.kind === 'any' ? 'any' : c.type)
  // A value of any type: shown as it is in markup, accepted where content is.
  // A value whose type reflection does not know is dynamic, as in Typst: `Expr<any>`.
  if (names.has('any')) return 'any'
  if (names.size === 0) return 'never'
  return [...names].map((n) => `'${n}'`).join(' | ')
}

function numberKind(cast: Cast): 'int' | 'float' | undefined {
  const types = new Set(flatten(cast).map((c) => (c.kind === 'any' ? 'any' : c.type)))
  if (types.has('int') && !types.has('float')) return 'int'
  if (types.has('float') && !types.has('int')) return 'float'
  return undefined
}

function takesContent(cast: Cast): boolean {
  const types = new Set(flatten(cast).map((c) => (c.kind === 'any' ? 'any' : c.type)))
  return types.has('content') && !types.has('array') && !types.has('any')
}

interface Param {
  typst: string
  ts: string
  docs: string
  input: string
  positional: boolean
  named: boolean
  required: boolean
  variadic: boolean
  settable: boolean
  field: boolean
  rt: string
  out: string
}

function patchParam(f: SpecFunc, p: SpecParam): Param | null {
  const key = `${f.path}.${p.name}`
  const patch: ParamPatch | undefined = patches[key]
  if (patch) usedOverlay.add(key)
  if (patch?.expect) {
    for (const [flag, value] of Object.entries(patch.expect)) {
      if (p[flag as keyof Flags] !== value)
        throw new Error(`overlay ${key}: expected ${flag}=${value}, reflection says ${p[flag as keyof Flags]}`)
    }
  }
  if (patch?.hide) return null
  const flags = {
    ...p,
    ...patch?.flags,
    ...(patch?.fieldOnly ? { positional: false, named: false, required: false, settable: false } : {}),
  }
  const shape = shapes[key] ?? shapes[p.name]
  usedOverlay.add(key in shapes ? key : p.name)
  const where = key
  const n = numberKind(p.input)
  const c = takesContent(p.input)
  const rt: string[] = []
  if (camel(p.name) !== p.name) rt.push(`t: '${p.name}'`)
  if (n) rt.push(`n: '${n}'`)
  if (c) rt.push('c: true')
  if (shape?.fn) rt.push(`fn: ${JSON.stringify(shape.fn)}`)
  const check = strings[key] ?? strings[p.name]
  if (check) {
    usedOverlay.add(key in strings ? key : p.name)
    rt.push(`str: '${check}'`)
  }
  if (flatten(p.input).some((c) => c.kind === 'type' && c.type === 'path')) {
    // Strings that are names, not paths (`bibliography(style: "apa")`), stay allowed.
    const names = flatten(p.input).flatMap((c) => (c.kind === 'value' && c.type === 'str' ? [c.value as string] : []))
    rt.push(names.length ? `path: ${JSON.stringify(names)}` : 'path: true')
  }
  // Where an element function is a selector or a kind (`outline(target: image)`, `figure(kind: image)`),
  // a function that reads files may go as a value.
  if (key === 'figure.kind' || flatten(p.input).some((c) => c.kind === 'type' && c.type === 'selector'))
    rt.push('sel: true')
  // Named shorthands (`block.spacing`, `grid.gutter`) work in set rules but are no fields.
  const shorthand = flags.named && !flags.positional && !flags.required && !p.variadic && !flags.settable
  return {
    typst: p.name,
    ts: camel(p.name),
    docs: p.docs,
    input: tsInput(p.input, shape, where),
    positional: flags.positional,
    named: flags.named,
    required: flags.required,
    variadic: p.variadic,
    settable: patch?.set ?? (flags.settable || shorthand),
    field: patch?.fieldOnly ?? patch?.field ?? (flags.positional || flags.settable || flags.required || p.variadic),
    rt: rt.join(', '),
    out: c ? "'content'" : typeNames(p.input),
  }
}

/** `method`: drop the `self` parameter; `path`: the path to call (`counter` for its constructor). */
function emit(f: SpecFunc, opts: { method?: boolean; path?: string } = {}): string {
  const name = jsName(f.path)
  const sig = pascal(f.path)
  const params = opts.method ? f.params.filter((p, i) => !(i === 0 && p.name === 'self')) : f.params
  const ps = params.map((p) => patchParam(f, p)).filter((p): p is Param => p !== null)
  const pos = ps.filter((p) => p.positional)
  // A parameter can be both positional and named (`gradient.linear(dir: btt, …)`).
  const named = ps.filter((p) => p.named)
  const fields = ps.filter((p) => p.field)
  const set = named.filter((p) => p.settable)
  // Positional settable fields (`#set align(center)`).
  const setPos = pos.filter((p) => p.settable && !p.variadic)
  const ctx = f.contextual === true

  // An optional positional before a required one (`align(center, body)`) is matched by
  // count, so the TS type is a union of tuples.
  const lastRequired = pos.findLastIndex((p) => p.required)
  const leading = pos.filter((p, i) => !p.required && i < lastRequired)
  const variants = Array.from({ length: leading.length + 1 }, (_, k) =>
    pos.filter((p) => p.required || !leading.includes(p) || leading.indexOf(p) < k),
  )
  // Tuple labels cannot be reserved words (`math.class(class, body)`).
  const label = (name: string) =>
    RESERVED.has(name) ||
    [
      'class',
      'const',
      'var',
      'let',
      'if',
      'for',
      'while',
      'do',
      'switch',
      'case',
      'break',
      'continue',
      'try',
      'catch',
      'finally',
      'throw',
      'typeof',
      'instanceof',
    ].includes(name)
      ? `${name}_`
      : name
  const tuple = (ps: Param[]) =>
    '[' +
    ps
      .map((p) =>
        p.variadic
          ? `...${label(p.ts)}: (${p.input} | Spread)[]`
          : `${label(p.ts)}${p.required || leading.includes(p) ? '' : '?'}: ${p.input}${p.required || leading.includes(p) ? '' : ' | undefined'}`,
      )
      .join(', ') +
    ']'
  // Overlay variants: alternative sets of positionals (`cmyk(c, m, y, k)` or `cmyk(color)`).
  const alternatives = variantsOverlay[f.path]
  const posType = alternatives
    ? alternatives
        .map((names) =>
          tuple(
            names.map((n) => {
              const q = pos.find((x) => x.typst === n)
              if (!q) throw new Error(`overlay variant: ${f.path} has no ${n}`)
              return { ...q, required: true }
            }),
          ),
        )
        .join(' | ')
    : variants.map(tuple).join(' | ')
  const ret = f.element ? "'content'" : typeNames(f.returns)

  let out = doc(f.docs + (f.deprecation ? ` @deprecated ${f.deprecation}` : ''))
  const open = openNamedOverlay.includes(f.path)
  out += `export interface ${sig}Named {\n${named.map((p) => doc(p.docs, '  ') + `  readonly ${p.ts}?: ${p.input}\n`).join('')}${open ? '  readonly [name: string]: TypstValue | undefined\n' : ''}}\n`
  out += `export interface ${sig}Sig {\n`
  out += `  named: ${sig}Named\n`
  out += `  pos: ${posType}\n`
  // `f.with(…)` fills the positional parameters in order, from the first: every one in the order of the signature.
  const withPos =
    '[' +
    pos
      .map((p) => (p.variadic ? `...${label(p.ts)}: (${p.input} | Spread)[]` : `${label(p.ts)}?: ${p.input}`))
      .join(', ') +
    ']'
  out += `  withPos: ${withPos}\n`
  out += `  ret: ${ret}\n`
  out += `  set: Pick<${sig}Named, ${set.map((p) => `'${p.ts}'`).join(' | ') || 'never'}>${setPos.map((p) => ` & { readonly ${p.ts}?: ${p.input} }`).join('')}\n`
  out += `  fieldsIn: {${fields.map((p) => ` readonly ${p.ts}?: ${p.variadic ? `readonly (${p.input})[]` : p.input}`).join(';')} }\n`
  out += `  fieldsOut: {${fields.map((p) => ` readonly ${p.ts}: Value<${p.variadic ? "'array'" : p.out}>`).join(';')} }\n`
  out += `  ctx: ${ctx}\n}\n`
  const rtPos = pos
    .filter((p) => !p.variadic)
    .map(
      (p) => `{ ${[`name: '${p.typst}'`, leading.includes(p) ? 'opt: true' : '', p.rt].filter(Boolean).join(', ')} }`,
    )
  const rest = pos.find((p) => p.variadic)
  const lines = [
    `path: '${opts.path ?? f.path}'`,
    `pos: [${rtPos.join(', ')}]`,
    alternatives ? `variants: ${JSON.stringify(alternatives)}` : null,
    rest ? `rest: { ${[`name: '${rest.typst}'`, rest.rt].filter(Boolean).join(', ')} }` : null,
    `named: { ${named.map((p) => `${p.ts}: {${p.rt ? ` ${p.rt} ` : ''}}`).join(', ')} }`,
    open ? 'openNamed: true' : null,
    f.element ? `fields: { ${fields.map((p) => `${p.ts}: '${p.typst}'`).join(', ')} }` : null,
    f.element ? `set: [${set.map((p) => `'${p.ts}'`).join(', ')}]` : null,
    setPos.length ? `setPos: [${setPos.map((p) => `'${p.typst}'`).join(', ')}]` : null,
    ctx ? 'ctx: true' : null,
    // Bytes the function makes may go where a file goes (`image(bytes(…))`).
    ret === "'bytes'" ? 'bytes: true' : null,
    // As a value, a function whose positional parameter is a file reads whatever Typst passes it
    // (`.map(json)`); a named one (`raw(theme: …)`) is never passed that way.
    pos.some((p) => /\bpath: /.test(p.rt)) ? 'reads: true' : null,
  ].filter(Boolean)
  out += `const ${name}$ = ${PURE}func<${sig}Sig>({\n${lines.map((l) => `  ${l},\n`).join('')}})\n`
  return out
}

const isExcluded = (path: string) => exclude.some((e) => path === e || path.startsWith(e + '.'))
const funcs = spec.functions.filter((f) => !isExcluded(f.path))

// An overlay entry for a function or parameter the spec no longer has would silently do nothing.
for (const path of [...exclude, ...openNamedOverlay, ...Object.keys(variantsOverlay)])
  if (!byPath.has(path) && !spec.functions.some((f) => f.path.startsWith(path + '.')))
    throw new Error(`overlay: ${path} is not in the spec`)

let body = ''
for (const f of funcs) {
  const ctorOf = f.path.endsWith('.constructor') ? f.path.slice(0, -'.constructor'.length) : undefined
  body += emit(f, ctorOf ? { path: ctorOf } : {}) + '\n'
}

// The tree of definitions: functions, types (constructor + scope) and modules.
interface Def {
  path: string
  func?: SpecFunc
  ctor?: SpecFunc
  /** A value from the overlay (`color.map.rainbow`), with its Typst type. */
  value?: string
  children: Map<string, Def>
}
const root: Def = { path: '', children: new Map() }
const defAt = (path: string): Def => {
  let def = root
  for (const seg of path.split('.')) {
    let next = def.children.get(seg)
    if (!next) def.children.set(seg, (next = { path: def.path ? `${def.path}.${seg}` : seg, children: new Map() }))
    def = next
  }
  return def
}
for (const f of funcs) {
  if (f.path.endsWith('.constructor')) defAt(f.path.slice(0, -'.constructor'.length)).ctor = f
  else defAt(f.path).func = f
}

for (const [module, { type, names }] of Object.entries(valuesOverlay))
  for (const name of names) defAt(`${module}.${name}`).value = type

const isMethod = (f: SpecFunc | undefined) => f?.params[0]?.name === 'self'

/** Paths of the types (and elements) that have methods. */
const methodTables: string[] = []

/** The export expression and its type, so that declarations need no inference. */
function build(def: Def): { value: string; type: string } {
  const members = [...def.children.values()].sort((a, b) => a.path.localeCompare(b.path))
  const built = members.map((m) => ({ key: camel(m.path.split('.').at(-1)!), ...build(m) }))
  const obj = built.length ? `{ ${built.map((b) => `${b.key}: ${b.value}`).join(', ')} }` : ''
  const objType = built.length ? `{ ${built.map((b) => `readonly ${b.key}: ${b.type}`).join('; ')} }` : ''
  const methods = members.filter((m) => isMethod(m.func))
  if (methods.length) methodTables.push(def.path)
  if (methods.length) {
    const name = pascal(def.path)
    body += `/** Methods of \`${def.path}\` values, called on the value (\`v.len()\`). */\n`
    body += `export interface ${name}Methods {\n${methods.map((m) => `  ${camel(m.path.split('.').at(-1)!)}: ${pascal(m.path)}Sig\n`).join('')}}\n`
    body += `export const ${camel(def.path.replaceAll('.', '-'))}Methods = { ${methods.map((m) => `${camel(m.path.split('.').at(-1)!)}: ${jsName(m.path)}$`).join(', ')} }\n\n`
  }
  if (def.value) return { value: `${PURE}pathValue<'${def.value}'>('${def.path}')`, type: `Value<'${def.value}'>` }
  let base: { value: string; type: string } | null = null
  if (def.func) base = { value: `${jsName(def.path)}$`, type: `Func<${pascal(def.path)}Sig>` }
  else if (def.ctor) {
    base = {
      value: `${PURE}typeCtor<${pascal(def.ctor.path)}Sig>(${jsName(def.ctor.path)}$[RT])`,
      type: `TypeCtor<${pascal(def.ctor.path)}Sig>`,
    }
  }
  if (base && obj) return { value: `${PURE}scoped(${base.value}, ${obj})`, type: `${base.type} & ${objType}` }
  if (base) return base
  // A type without a constructor (`function`) or a module (`calc`) is a value too: it prints as its path.
  return { value: `${PURE}named('${def.path}', ${obj})`, type: objType }
}

// A type (`dictionary`) is also a value of type `type`.
const TYPES = new Set(spec.types.map((t) => t.path))
for (const def of [...root.children.values()].sort((a, b) => a.path.localeCompare(b.path))) {
  const { value, type } = build(def)
  body += TYPES.has(def.path)
    ? `export const ${jsName(def.path)}: ${type} & TypstType = ${PURE}typeValue(${value})\n`
    : `export const ${jsName(def.path)}: ${type} = ${value}\n`
}

// Every value has the methods of its type: by type for the type checker, by name at runtime.
body += `\n/** The methods of each Typst type, by type name (\`MethodsOf\` in element.ts). */\n`
body += `export interface TypeMethods {\n${methodTables.map((t) => `  '${t}': ${pascal(t)}Methods\n`).join('')}}\n`
body += `installMethods({ ${methodTables.map((t) => `'${t}': ${camel(t.replaceAll('.', '-'))}Methods`).join(', ')} })\n`

// Global values that are not functions or types, so the spec does not list them.
const VALUES = [
  'left',
  'center',
  'right',
  'start',
  'end',
  'top',
  'horizon',
  'bottom',
  'ltr',
  'rtl',
  'ttb',
  'btt',
  'black',
  'gray',
  'silver',
  'white',
  'navy',
  'blue',
  'aqua',
  'teal',
  'eastern',
  'purple',
  'fuchsia',
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'lime',
  'luma',
  'sym',
  'emoji',
  'std',
  'sys',
  'math',
]
const globals = new Set([...spec.functions, ...spec.types].map((d) => d.path.split('.')[0]!).concat(VALUES))
const hash = createHash('sha256').update(raw).digest('hex')

const header = `// GENERATED by scripts/generate.ts from spec/typst-${VERSION}.json — do not edit.
// spec sha256: ${hash}
// Documentation comments: Typst contributors, Apache-2.0 (see LICENSE).
/* eslint-disable */
import type { Auto, ContentArg, DictArg, Expr, Fraction, Label, Length, OneOf, Paint, Ratio, Relative, Spread, TypstFn, TypstType, TypstValue } from '../core.ts'
import type { Alignment, CellFn, Corners, FontDict, Margin, Position, Sides, StrokeArg, StrokeDict, Tracks } from '../shapes.ts'
import { type Func, type TypeCtor, type Value, func, installMethods, named, pathValue, RT, scoped, typeCtor, typeValue } from '../element.ts'

/** The Typst version these bindings were generated for. */
export const TYPST_VERSION = '${VERSION}'

/** Every name in Typst's global scope. */
export const STD_GLOBALS: ReadonlySet<string> = ${PURE}new Set(${JSON.stringify([...globals].sort())})

`

/**
 * Files every export under a TypeDoc category (typedoc.json), so that the API
 * reference lists the hand-written library apart from the generated bindings:
 * the functions and values, and the interfaces that type their arguments.
 */
function categorize(source: string): string {
  const lines = source.split('\n')
  const out: string[] = []
  for (const line of lines) {
    const m = /^export (const|interface) /.exec(line)
    if (m) {
      const tag = ` * @category ${m[1] === 'interface' ? 'Standard library signatures' : 'Standard library'}`
      const doc = /^\/\*\* (.*) \*\/$/.exec(out.at(-1) ?? '')
      if (doc) out.splice(-1, 1, `/**`, ` * ${doc[1]}`, tag, ` */`)
      else out.push('/**', tag, ' */')
    }
    out.push(line)
  }
  return out.join('\n')
}

mkdirSync(new URL('../src/gen/', import.meta.url), { recursive: true })
const unused = [...Object.keys(patches), ...Object.keys(shapes), ...Object.keys(strings)].filter(
  (k) => !usedOverlay.has(k),
)
if (unused.length) throw new Error(`overlay: no parameter in the spec is ${unused.join(', ')}`)
writeFileSync(new URL('../src/gen/std.ts', import.meta.url), categorize(header + body))
console.log(`generated ${funcs.length} functions for Typst ${VERSION}`)

// Symbols: `sym` and `emoji` as tries of modifiers. (`math` re-exports `sym`.)
interface SpecSymbol {
  path: string
  variants: { variant: string; deprecation: string | null }[]
}
type Trie = Map<string, Trie> & { module?: true }
const symbols = (spec as unknown as { symbols: SpecSymbol[] }).symbols
const tries = new Map<string, Trie>()
for (const s of symbols) {
  const [module, ...names] = s.path.split('.') as [string, ...string[]]
  if (module !== 'sym' && module !== 'emoji') continue
  const trie: Trie = tries.get(module) ?? new Map()
  tries.set(module, trie)
  // Paths can go through submodules (`sym.control.one`).
  let base = trie
  names.forEach((name, i) => {
    const next: Trie = base.get(name) ?? new Map()
    base.set(name, next)
    if (i < names.length - 1) next.module = true
    base = next
  })
  for (const v of s.variants) {
    if (v.deprecation || !v.variant) continue
    let t = base
    for (const mod of v.variant.split('.')) {
      const next = t.get(mod) ?? new Map()
      t.set(mod, next)
      t = next
    }
  }
}
const printTrie = (t: Trie): string =>
  `{ ${[...t]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([name, c]) =>
        `${JSON.stringify(camel(name))}: [${camel(name) === name ? 0 : JSON.stringify(name)}, ${printTrie(c)}${c.module ? ', 1' : ''}]`,
    )
    .join(', ')} }`
let symSource = `// GENERATED by scripts/generate.ts from spec/typst-${VERSION}.json — do not edit.\n/* eslint-disable */\nimport { symbolModule } from '../symbols.ts'\n\n`
for (const [module, trie] of [...tries].sort()) {
  symSource += `const ${module}Trie = ${printTrie(trie)} as const\n`
  symSource += `/** The \`${module}\` module: \`${module}.name.modifier\`. */\nexport const ${module} = ${PURE}symbolModule('${module}', ${module}Trie)\n\n`
}
writeFileSync(new URL('../src/gen/sym.ts', import.meta.url), categorize(symSource))
