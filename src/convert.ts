/** Conversion of user values into nodes. */
import {
  type BlockNode,
  type Code,
  type Expr,
  type InlineNode,
  type Markup,
  expr,
  FLOW,
  isExpr,
  isMarkup,
  isPlainObject,
  isReaderValue,
  isStmt,
  markParam,
  nodeOf,
  RT,
} from './core.ts'
import { assertIdent, bigintLiteral, kebab, numberLiteral } from './escape.ts'

/** What the generated tables tell the runtime about a parameter. */
export interface ParamRt {
  /** The Typst name, when it differs from the TS name. */
  readonly t?: string
  /** The number kind, when only one of int and float is accepted. */
  readonly n?: 'int' | 'float'
  /** The parameter takes content: a JS array is a sequence, not a Typst array. */
  readonly c?: true
  /** Parameter names for a JS function given as callback. */
  readonly fn?: readonly string[]
  /** The parameter takes a file path: a JS string is rejected (see `path`), except the listed names. */
  readonly path?: true | readonly string[]
  /** The parameter takes a selector or a kind: an element function that reads files may go as a value. */
  readonly sel?: true
  /** A `T.oneOf` parameter of a `define`: the names it takes. */
  readonly oneOf?: readonly string[]
  /** A string Typst checks (see `strings` in spec/overlay.ts). */
  readonly str?: 'char' | 'nonempty' | 'lang' | 'region'
  /** `T.orAuto` / `T.nullable`: `auto` / `none` are allowed too. */
  readonly orAuto?: true
  readonly orNone?: true
}

function assertString(s: string): string {
  if (!s.isWellFormed())
    throw new TypeError(
      'Typst cannot represent a string with a lone surrogate (half of a UTF-16 pair); fix the data, or replace it with str.toWellFormed()',
    )
  return s
}

export function toInline(arg: unknown): InlineNode[] {
  if (arg === false || arg === null || arg === undefined) return []
  if (typeof arg === 'string') return arg === '' ? [] : [{ k: 'text', v: assertString(arg) }]
  if (typeof arg === 'number') {
    if (!Number.isFinite(arg)) throw new RangeError(`cannot show ${arg}`)
    return [{ k: 'text', v: String(arg) }]
  }
  if (Array.isArray(arg)) return nested(() => arg.flatMap(toInline))
  if (isExpr(arg)) return [{ k: 'embed', code: nodeOf(arg) }]
  // A function value shows as itself (`#text` shows `text`).
  if (typeof arg === 'function' && RT in arg) return [{ k: 'embed', code: toCode(arg) }]
  if (isMarkup(arg) && arg[FLOW] === 'inline') return [...arg.nodes]
  if (isStmt(arg)) return [{ k: 'stmt', stmt: arg.stmt }]
  if (isMarkup(arg)) {
    throw new TypeError(
      'block content (heading, list, paragraph) cannot go inside a line: put it in blocks() or doc(), not in inline()',
    )
  }
  throw new TypeError(
    `cannot use ${describe(arg)} as markup: markup takes strings, numbers, markup, statements and expressions; a plain object is a dictionary (data() or dict())`,
  )
}

export function toBlocks(arg: unknown): BlockNode[] {
  if (arg === false || arg === null || arg === undefined) return []
  // `nested`: a cycle or data too deep fails clearly, as in toInline, not with a stack overflow.
  if (Array.isArray(arg)) return nested(() => arg.flatMap(toBlocks))
  if (isStmt(arg)) return [{ k: 'stmt', stmt: arg.stmt }]
  if (isMarkup(arg) && arg[FLOW] === 'block') return [...arg.items]
  const inline = toInline(arg)
  return inline.length ? [{ k: 'par', inline }] : []
}

function hasBlock(arg: unknown): boolean {
  if (Array.isArray(arg)) return nested(() => arg.some(hasBlock))
  return (isMarkup(arg) && arg[FLOW] === 'block') || isStmt(arg)
}

/** Markup for a content value: inline when possible, so that it prints on one line. */
export function toMarkup(arg: unknown): Markup {
  return hasBlock(arg) ? { blocks: toBlocks(arg) } : { inline: toInline(arg) }
}

/** A value in a position that takes content. */
export function toContentCode(arg: unknown): Code {
  if (typeof arg === 'string') return { k: 'str', v: assertString(arg) }
  if (arg === null) return { k: 'lit', v: 'none' }
  if (isExpr(arg)) return valueNode(arg)
  return { k: 'content', body: toMarkup(arg) }
}

let closureDepth = 0

/** A JS function as a Typst closure; parameters are bound to identifiers. */
export function toClosure(
  fn: (...args: never[]) => unknown,
  names: readonly string[] | undefined,
  wrap: (name: string) => unknown = (n) => expr({ k: 'ident', name: n }),
  /** Extra JS arguments that are not Typst parameters (the context token of a show rule). */
  extra: readonly unknown[] = [],
): Code {
  const arity = fn.length - extra.length
  // `() => …` ignores its arguments, however many Typst passes: `(..) => …`. One parameter is `it`.
  const base = names ?? (arity === 0 ? ['..'] : arity === 1 ? ['it'] : ['x', 'y', 'z', 'w'].slice(0, arity))
  // Nested closures get a suffix so that they never shadow an outer parameter.
  const params = base.map((n) => (n === '..' ? n : assertIdent(closureDepth ? `${n}${closureDepth + 1}` : n)))
  closureDepth++
  try {
    const refs = params.map(wrap)
    for (const ref of refs) if (isExpr(ref)) markParam(nodeOf(ref))
    const result = (fn as (...args: unknown[]) => unknown)(...refs, ...extra)
    // An async function returns a promise: the document is built synchronously, and the promise
    // would read the parameter's `then` (no field of a Typst value).
    if (result instanceof Promise) {
      result.catch(() => {})
      throw new TypeError('a function given as a Typst closure must return its value, not a promise (no async)')
    }
    // A closure returns a value: an array is a Typst array, markup is content.
    return { k: 'closure', params, body: toCode(result) }
  } finally {
    closureDepth--
  }
}

/** Typst's parser stops before this depth; deeper data (or a cycle) fails here, clearly. */
export const MAX_DEPTH = 256
let depth = 0

/** Runs `f` one level deeper into a value, failing clearly on a cycle or data too deep for Typst. */
export function nested<T>(f: () => T): T {
  if (depth >= MAX_DEPTH)
    throw new RangeError(`a value nests deeper than ${MAX_DEPTH} levels (or contains itself): Typst cannot parse it`)
  depth++
  try {
    return f()
  } finally {
    depth--
  }
}

/**
 * The items of an array; a hole throws, even where a polluted `Object.prototype` has the index
 * (`Array.from` would read it there).
 */
export function ownItems(v: readonly unknown[]): unknown[] {
  return Array.from({ length: v.length }, (_, i) => {
    if (!Object.hasOwn(v, i))
      throw new TypeError(`an array has a hole at ${i} (undefined, which Typst has no value for)`)
    return v[i]
  })
}

/** Any value in code position. */
export function toCode(v: unknown, p?: ParamRt): Code {
  return nested(() => toCodeAt(v, p))
}

/**
 * An expression as a value. A function value that reads files (`csv.with()`, a define with a `T.path`)
 * goes only where Typst takes a selector or a kind: anywhere else, Typst (or a template) could call it
 * with values it computes, which could be any string of data.
 */
export function valueNode(v: Expr<string>, p?: ParamRt): Code {
  if (isReaderValue(v) && !p?.sel)
    throw new TypeError(
      'this function value reads files (a .with() that leaves a file out, a define with a T.path, T.bytes or ' +
        'T.oneOf parameter): as a value, Typst would call it with values it computes; call it ' +
        "with path('…') instead",
    )
  return nodeOf(v)
}

function toCodeAt(v: unknown, p?: ParamRt): Code {
  if (isExpr(v)) return valueNode(v, p)
  if (typeof v === 'string') return { k: 'str', v: assertString(v) }
  if (typeof v === 'number') return { k: 'lit', v: numberLiteral(v, p?.n) }
  if (typeof v === 'bigint') return { k: 'lit', v: bigintLiteral(v) }
  if (typeof v === 'boolean') return { k: 'lit', v: String(v) }
  if (v === null) return { k: 'lit', v: 'none' }
  if (isMarkup(v)) return { k: 'content', body: toMarkup(v) }
  if (Array.isArray(v)) {
    if (p?.c) return toContentCode(v)
    // `Array.from`: a hole is `undefined`, which throws, instead of being skipped by `map`.
    return { k: 'array', items: ownItems(v).map((x) => toCode(x)) }
  }
  // A type or a module of the standard library (`function`, `calc`), as a value.
  if (typeof v === 'object' && v !== null && RT in v) return pathCode((v as { [RT]: { path: string } })[RT].path)
  if (isPlainObject(v)) {
    const entries: [{ ident: string } | { str: string }, Code][] = []
    const seen = new Set<string>()
    for (const [key, value] of Object.entries(v)) {
      if (value === undefined) continue
      const name = assertIdent(kebab(key))
      if (seen.has(name)) throw new TypeError(`two keys of this object are both ${JSON.stringify(name)} in Typst`)
      seen.add(name)
      // ASCII identifiers print bare; others as strings, the same key: Unicode's identifier characters
      // change between versions, and JS may know more of them than Typst.
      entries.push([/^[A-Za-z_][A-Za-z0-9_-]*$/.test(name) ? { ident: name } : { str: name }, toCode(value)])
    }
    return { k: 'dict', entries }
  }
  if (typeof v === 'function' && RT in v) {
    // A function the document defines is no name of the standard library.
    const rt = (v as unknown as { [RT]: { path: string; user?: true; reads?: true; reader?: true } })[RT]
    // A name the document must import (`define('cite')….external()`): see printer.ts.
    if (Object.hasOwn(rt, 'reader') && rt.reader) return { k: 'ident', name: rt.path, reader: true }
    // Typst would call it with values it computes (`.map(json)`), which could be any string of data.
    if (Object.hasOwn(rt, 'reads') && rt.reads && !p?.sel)
      throw new TypeError(
        `${rt.path} reads a file: as a value, Typst would call it with values it computes; call it with path('…') instead`,
      )
    return pathCode(rt.path, !rt.user)
  }
  if (typeof v === 'function') return toClosure(v as (...args: never[]) => unknown, p?.fn)
  throw new TypeError(`cannot use ${describe(v)} as a Typst value`)
}

/** `table.cell` as a code node. */
export function pathCode(path: string, std = true): Code {
  const [head, ...rest] = path.split('.')
  const root: Code = std ? { k: 'ident', name: head!, std } : { k: 'ident', name: head! }
  return rest.reduce<Code>((target, name) => ({ k: 'field', target, name }), root)
}

function describe(v: unknown): string {
  if (isStmt(v)) return 'a statement'
  return v === undefined ? 'undefined' : typeof v === 'object' ? 'this object' : typeof v
}
