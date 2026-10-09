/**
 * The one escape hatch: a vetted Typst snippet, with named variables.
 *
 *   unsafeRaw.code`page.width - 2cm`
 *   unsafeRaw.code({ banner: strong(name) })`if it.level == 1 { banner } else { it }`
 *   unsafeRaw.markup({ name })`Dear #name,`
 *   unsafeRaw.math`x^2 + y^2 = r^2`
 *
 * The text of the template is Typst source that a developer wrote and
 * reviewed: it takes no `${…}`, and the lint rule `typed-typst/unsafe-raw` rejects
 * any form other than a tagged template, so it never comes from a variable.
 * Grep for `unsafeRaw` to audit every use.
 *
 * Values reach the snippet only as variables: each one prints as
 * `let name = …` before the snippet (in a code block, or a content block for
 * markup, so that the variables end with it), and the snippet names it. A
 * variable's value cannot name another variable of the snippet. A name is inert
 * in markup and a reference in code, so data can never become code, wherever
 * the snippet uses it.
 *
 * The template is read raw, like `String.raw`: `\#` stays `\#`, and so does every backslash,
 * except in three escapes, as in any JavaScript template: `\\` is `\`, `` \` `` is `` ` ``
 * and `\${` is `${`. So a snippet can end with a backslash (`\\`), and a Typst `` \` `` is
 * written `` \\\` ``; a Typst `\\` is written `\\\\`.
 */
import {
  type Block,
  type BlockNode,
  type Code,
  type DEFINED_FN,
  type Expr,
  type Inline,
  type StmtNode,
  blockOf,
  expr,
  isMarkup,
} from './core.ts'
import { toCode, toContentCode } from './convert.ts'
import type { AnyFunc, Value } from './element.ts'
import { assertFreeName } from './rules.ts'
import { STD_GLOBALS, math as stdMath } from './gen/std.ts'
import { sym } from './gen/sym.ts'

/** What a variable can hold: values built with the API (also functions from `define`), and plain data. */
export type Binding =
  Expr<string> | Inline | Block | AnyFunc | { readonly [DEFINED_FN]: true } | string | number | boolean | null

/** Variables for a snippet: literal names (no computed keys), each holding a `Binding`. */
export type Bindings<B> = string extends keyof B ? never : { readonly [K in keyof B]: Binding }

type Tag<R> = (strings: TemplateStringsArray) => R

/** Called directly as a tag, or with variables first: `` f({ x })`…` ``. */
export interface RawTag<R> {
  (strings: TemplateStringsArray): R
  <const B extends Record<string, Binding>>(bindings: B & Bindings<B>): Tag<R>
}

/** Like `RawTag`, with the Typst type of the result as a type argument. */
export interface CodeTag {
  <T extends string = string>(strings: TemplateStringsArray): Value<T>
  /** The type goes on the tag: `` unsafeRaw.code({ x })<'content'>`…` ``. */
  <const B extends Record<string, Binding>>(
    bindings: B & Bindings<B>,
  ): <T extends string = string>(strings: TemplateStringsArray) => Value<T>
}

function isTemplate(v: unknown): v is TemplateStringsArray {
  return Array.isArray(v) && 'raw' in v
}

function literal(strings: TemplateStringsArray, extra: number): string {
  // A template strings array is frozen, and its `raw` is a frozen, non-enumerable array; a forged
  // one usually is not. This is a tripwire, not a proof: the lint rule is what keeps the text literal.
  const raw = Object.getOwnPropertyDescriptor(strings, 'raw')
  if (
    extra ||
    !raw ||
    raw.enumerable ||
    !Array.isArray(raw.value) ||
    !Object.isFrozen(strings) ||
    !Object.isFrozen(raw.value) ||
    raw.value.length !== 1
  ) {
    throw new TypeError(
      'unsafeRaw only takes a literal template, without ${…}; pass values as variables: unsafeRaw.code({ x })`…`',
    )
  }
  // Raw, except for three escapes: \\ \` \${ (left to right, so \\\` is \ then `).
  return dedent(strings.raw[0]!.replace(/\\(\\|`|\$\{)/g, '$1'))
}

/**
 * Removes the indentation that the lines after the first have in common: the
 * template's indentation in the TypeScript file, which means nothing in Typst.
 * The lines keep their indentation relative to each other.
 */
function dedent(src: string): string {
  const lines = src.split('\n')
  if (lines.length < 2) return src
  const indents = lines
    .slice(1)
    .filter((l) => l.trim())
    .map((l) => /^[ \t]*/.exec(l)![0].length)
  const common = indents.length ? Math.min(...indents) : 0
  return [lines[0], ...lines.slice(1).map((l) => l.slice(Math.min(common, /^[ \t]*/.exec(l)![0].length)))].join('\n')
}

/** The identifiers a node names (`a` in `a + 1`, also inside markup and closures). */
function namesIn(v: unknown, out = new Set<string>()): Set<string> {
  if (Array.isArray(v)) for (const x of v) namesIn(x, out)
  else if (typeof v === 'object' && v !== null) {
    if ((v as { k?: unknown }).k === 'ident' && !(v as { std?: true }).std) out.add((v as { name: string }).name)
    for (const x of Object.values(v)) namesIn(x, out)
  }
  return out
}

/** The names an equation reads besides variables: symbols (`pi`, `arrow`) and math functions (`frac`). */
let mathScope: Set<string> | undefined
function mathNames(): Set<string> {
  mathScope ??= new Set([...Object.keys(sym), ...Object.keys(stdMath)])
  return mathScope
}

function lets(bindings: Record<string, unknown>, src: string, math = false): StmtNode[] {
  const names = Object.keys(bindings)
  return Object.entries(bindings)
    .map(([name, value]) => {
      assertFreeName(name)
      // An object typed `{ name }` may hold more keys at run time (from data): a key that is also a name of
      // Typst's (`text`, or `pi` in an equation) would change what the snippet means.
      if (STD_GLOBALS.has(name) || (math && mathNames().has(name)))
        throw new TypeError(
          `unsafeRaw: variable ${name} would hide Typst's ${name} in the snippet; rename it (and check that the ` +
            'object holds only the variables the snippet needs)',
        )
      // A variable that the text never names is almost always a typo in the text.
      if (!new RegExp(`(?<![\\p{XID_Continue}-])${name}(?![\\p{XID_Continue}-])`, 'u').test(src)) {
        throw new TypeError(`unsafeRaw: variable ${name} is not used in the snippet`)
      }
      const code = isMarkup(value) ? toContentCode(value) : toCode(value)
      // The variables are bound one after the other: a value that names another variable of the
      // snippet would read that variable, not the document's binding of the name.
      const shadowed = [...namesIn(code)].find((n) => names.includes(n) && n !== name)
      if (shadowed)
        throw new TypeError(
          `unsafeRaw: the value of ${name} names ${shadowed}, which is also a variable of the snippet; rename one`,
        )
      return { k: 'let', name, params: null, value: code, snippet: true } as StmtNode
    })
    .filter((stmt) => {
      // A variable that already has its name (a parameter of a `define`) needs no `let x = x`.
      const value = (stmt as { value: Code; name: string }).value
      return !(value.k === 'ident' && !value.std && value.name === (stmt as { name: string }).name)
    })
}

function tag<R>(build: (src: string, stmts: StmtNode[]) => R, math = false): RawTag<R> {
  return ((first: unknown, ...rest: unknown[]) => {
    if (isTemplate(first)) return build(literal(first, rest.length), [])
    const bindings = first as Record<string, unknown>
    return (strings: TemplateStringsArray, ...more: unknown[]) => {
      const src = literal(strings, more.length)
      return build(src, lets(bindings, src, math))
    }
  }) as RawTag<R>
}

function codeOf(stmts: StmtNode[], value: Code): Code {
  return stmts.length ? { k: 'block', stmts, value } : value
}

function math(block: boolean): RawTag<Expr<'content'>> {
  return tag((src, stmts) => expr(codeOf(stmts, { k: 'math', src, block })), true)
}

export const unsafeRaw = {
  /** A code expression of the given Typst type. */
  code: tag((src, stmts) => expr(codeOf(stmts, { k: 'raw', src }))) as CodeTag,
  /** Markup, printed on its own lines. Show a variable with `#name`. */
  markup: tag((src, stmts): Block => {
    if (!stmts.length) return blockOf([{ k: 'raw', src }])
    // In a content block of its own, so that the variables end with the snippet (`#[#let x = …]`).
    const items: BlockNode[] = [...stmts.map((stmt): BlockNode => ({ k: 'stmt', stmt })), { k: 'raw', src }]
    return blockOf([{ k: 'par', inline: [{ k: 'embed', code: { k: 'content', body: { blocks: items } } }] }])
  }),
  /** An inline equation, `$…$`. Show a variable with `#name`. */
  math: Object.assign(math(false), {
    /** A block equation, `$ … $`. */
    block: math(true),
  }),
}
