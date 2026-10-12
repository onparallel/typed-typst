/** Conversion of user values into nodes. */
import {
  type BlockNode,
  type Code,
  type InlineNode,
  type Markup,
  expr,
  FLOW,
  isExpr,
  isMarkup,
  isPlainObject,
  isSpread,
  isStmt,
  nodeOf,
  RT,
  SPREAD,
} from './core.ts'
import { assertIdent, bigintLiteral, kebab, markupText, numberLiteral, significant } from './escape.ts'

/** What the generated tables tell the runtime about a parameter. */
export interface ParamRt {
  /** The Typst name, when it differs from the TS name. */
  readonly t?: string
  /** The number kind, when only one of int and float is accepted. */
  readonly n?: 'int' | 'float'
  /** The parameter takes content: a JS array is a sequence, not a Typst array. */
  readonly c?: true
  /** A JS function given here returns content (`numbering`, `list.marker`, `layout`). */
  readonly fc?: true
  /** `false`, `undefined` and numbers are content; an array stays an array (`list.marker`). */
  readonly sc?: true
  /** The parameter takes a file path: a JS string is rejected (see `path`), except the listed names. */
  readonly path?: true | readonly string[]
  /** A `T.oneOf` parameter of a `define`: the names it takes. */
  readonly oneOf?: readonly string[]
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

const SPREAD_ONLY =
  'a spread (spread(…), or the rest parameter of a callback, (...xs) => …) goes only where variadic arguments go: f(...xs)'

export function toInline(arg: unknown): InlineNode[] {
  if (arg === false || arg === null || arg === undefined) return []
  if (typeof arg === 'string') return arg === '' ? [] : [{ k: 'text', v: assertString(arg) }]
  if (typeof arg === 'number') {
    if (!Number.isFinite(arg)) throw new RangeError(`cannot show ${arg}`)
    // A minus sign, as Typst shows a negative number (`#(-5)` is `−5`), not a hyphen.
    return [{ k: 'text', v: String(significant(arg)).replace(/^-/, '\u2212') }]
  }
  if (Array.isArray(arg)) return nested(() => arg.flatMap(toInline))
  if (isExpr(arg)) return [{ k: 'embed', code: nodeOf(arg) }]
  if (isSpread(arg)) throw new TypeError(SPREAD_ONLY)
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

/**
 * Parts of a body (`doc`, `blocks`, an item's children): each part is a block, or a paragraph of its
 * own; a part that is an array is one sequence (see `sequenceBlocks`).
 */
export function toBlocks(arg: unknown): BlockNode[] {
  if (arg === false || arg === null || arg === undefined) return []
  // `nested`: a cycle or data too deep fails clearly, as in toInline, not with a stack overflow.
  if (Array.isArray(arg))
    return nested(() => arg.flatMap((part) => (Array.isArray(part) ? sequenceBlocks(part) : toBlocks(part))))
  if (isStmt(arg)) return [{ k: 'stmt', stmt: arg.stmt }]
  if (isMarkup(arg) && arg[FLOW] === 'block') return [...arg.items]
  const inline = toInline(arg)
  return inline.length ? [{ k: 'par', inline }] : []
}

/**
 * An array as content is a sequence of markup: its inline parts join into one paragraph, and only its
 * blocks (a list, a heading) break it (`['Total: ', total, m.list(…)]`).
 */
function sequenceBlocks(items: readonly unknown[]): BlockNode[] {
  const out: BlockNode[] = []
  let line: InlineNode[] = []
  const flush = () => {
    if (line.length) out.push({ k: 'par', inline: line })
    line = []
  }
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) return nested(() => v.forEach((x) => walk(x)))
    if (isMarkup(v) && v[FLOW] === 'block') {
      flush()
      // One by one: a spread of a large array as arguments overflows V8's stack.
      for (const item of v.items) out.push(item)
    } else for (const node of toInline(v)) line.push(node)
  }
  walk(items)
  flush()
  return out
}

function hasBlock(arg: unknown): boolean {
  if (Array.isArray(arg)) return nested(() => arg.some(hasBlock))
  // A statement goes in a line too (`[#set text(red); world]`), as `inline` prints it.
  return isMarkup(arg) && arg[FLOW] === 'block'
}

/** Markup for a content value: inline when possible, so that it prints on one line. */
export function toMarkup(arg: unknown): Markup {
  if (!hasBlock(arg)) return { inline: toInline(arg) }
  const blocks = Array.isArray(arg) ? sequenceBlocks(arg) : toBlocks(arg)
  // One paragraph is a line: on lines of its own, the line breaks around it would be spaces in the
  // content (`strong(unsafeRaw.markup({ who })` + "`#who`" + `)`).
  const only = blocks.length === 1 ? blocks[0]! : undefined
  return only?.k === 'par' ? { inline: only.inline } : { blocks }
}

/** An array of strings and markup: content (a sequence), as its type says (`let_`, `codeBlock`). */
export function isContentArray(v: unknown): boolean {
  return Array.isArray(v) && v.every((x) => typeof x === 'string' || isMarkup(x) || isStmt(x))
}

/** A value in a position that takes content. */
export function toContentCode(arg: unknown): Code {
  if (typeof arg === 'string') return { k: 'str', v: assertString(arg) }
  if (arg === null) return { k: 'lit', v: 'none' }
  if (isExpr(arg)) return nodeOf(arg)
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
  /** The closure returns content (a show rule, `supplement`): an array it returns is a sequence. */
  content = false,
): Code {
  const arity = fn.length - extra.length
  // One parameter is `it`; more are `_1`, `_2`…, names the document cannot bind (`let_` and `define`
  // reject them), so that they never shadow a binding the callback reads. Typst may pass more arguments
  // than a callback names (a cell callback gets `x` and `y`, `fold` the accumulator and the item): the
  // closure ends with a sink, `(it, .._0) => …`, and the JS function gets it after its parameters, as
  // one value that spreads where variadic arguments go: a rest parameter
  // (`(first, ...rest) => numbering('1.a', first, ...rest)`) holds it, any other ignores it. (`fn.length`
  // counts neither a rest parameter nor one with a default.) A show rule's callback, which takes the
  // context token after `it`, ends with an unnamed sink, `(it, ..) => …`.
  const fixed = arity === 1 ? ['it'] : Array.from({ length: arity }, (_, i) => `_${i + 1}`)
  const base = names ?? [...fixed, extra.length ? '..' : '.._0']
  // Nested closures get a suffix so that they never shadow an outer parameter.
  const params = base.map((p) => {
    if (p === '..') return p
    const sink = p.startsWith('..')
    const n = sink ? p.slice(2) : p
    return (sink ? '..' : '') + assertIdent(closureDepth ? `${n}${n.startsWith('_') ? '_' : ''}${closureDepth + 1}` : n)
  })
  const args = params.flatMap((p) => {
    if (p === '..') return []
    if (!p.startsWith('..')) return [wrap(p)]
    // Only a spread: `nums` is a JS array of this one value, so `nums.length` or `data(nums)` would be
    // wrong (see `toCodeAt`).
    return [Object.freeze({ [SPREAD]: nodeOf(wrap(p.slice(2)) as never) })]
  })
  closureDepth++
  try {
    const result = (fn as (...args: unknown[]) => unknown)(...args, ...extra)
    // An async function returns a promise: the document is built synchronously, and the promise
    // would read the parameter's `then` (no field of a Typst value).
    if (result instanceof Promise) {
      result.catch(() => {})
      throw new TypeError('a function given as a Typst closure must return its value, not a promise (no async)')
    }
    // A closure returns a value: an array is a Typst array, markup is content; where it returns
    // content, an array is content too (`it => [strong(it.body), '!']`).
    // `false` and numbers in such a closure are content too (`it => draft && strong(it.body)`), as in `context`.
    const asContent = content && !isExpr(result) && typeof result !== 'function'
    return { k: 'closure', params, body: asContent ? toContentCode(result) : toCode(result) }
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

function toCodeAt(v: unknown, p?: ParamRt): Code {
  if (isExpr(v)) return nodeOf(v)
  if (isSpread(v)) throw new TypeError(SPREAD_ONLY)
  if (typeof v === 'string') return { k: 'str', v: assertString(v) }
  if (typeof v === 'number') return { k: 'lit', v: numberLiteral(v, p?.n) }
  if (typeof v === 'bigint') return { k: 'lit', v: bigintLiteral(v) }
  if (typeof v === 'boolean') return { k: 'lit', v: String(v) }
  if (v === null) return { k: 'lit', v: 'none' }
  // A statement is content where a value goes, as in markup (`[#set text(red)]`).
  if (isMarkup(v) || isStmt(v)) return { k: 'content', body: toMarkup(v) }
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
      // A key that is no identifier (a keyword, a space) prints as a string, as in `dict()`.
      let name = kebab(key)
      let isName = true
      try {
        assertIdent(name)
      } catch {
        ;[name, isName] = [key, false]
      }
      if (seen.has(name)) throw new TypeError(`two keys of this object are both ${JSON.stringify(name)} in Typst`)
      seen.add(name)
      // ASCII identifiers print bare; others as strings, the same key: Unicode's identifier characters
      // change between versions, and JS may know more of them than Typst.
      entries.push([isName && /^[A-Za-z_][A-Za-z0-9_-]*$/.test(name) ? { ident: name } : { str: name }, toCode(value)])
    }
    return { k: 'dict', entries }
  }
  if (typeof v === 'function' && RT in v) {
    // A function the document defines is no name of the standard library.
    const rt = (v as unknown as { [RT]: { path: string; user?: true } })[RT]
    return pathCode(rt.path, !rt.user)
  }
  if (typeof v === 'function')
    return toClosure(v as (...args: never[]) => unknown, undefined, undefined, [], p?.c || p?.fc)
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
