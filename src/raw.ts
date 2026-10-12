/**
 * The one escape hatch: a vetted Typst snippet, with named variables.
 *
 *   unsafeRaw.code`page.width - 2cm`
 *   unsafeRaw.code({ banner: strong(name) })`if it.level == 1 { banner } else { it }`
 *   unsafeRaw.markup({ name })`Dear #name,`
 *   unsafeRaw.math`x^2 + y^2 = r^2`
 *
 * The text of the template is Typst source that a developer wrote and
 * reviewed: the types take a template literal with no `${…}`, so in typed code it never
 * comes from a variable. Grep for `unsafeRaw` to audit every use.
 *
 * A markup snippet is content, `[…]`, wherever it goes, so its own set and show
 * rules end with it (put a rule for what follows in `set` and `show`). Only one
 * without variables on its own lines at the top of the document prints as written.
 *
 * Values reach the snippet only as variables: each one prints as
 * `let name = …` before the snippet (in a code block, or in the content block of
 * markup), and the snippet names it. A
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
  type Code,
  type Content,
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
  // one usually is not. This is a tripwire for untyped code, not a proof.
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
  return strings.raw[0]!.replace(/\\(\\|`|\$\{)/g, '$1')
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

/**
 * A markup snippet's text. A template that opens and closes on lines of their own
 * (`` unsafeRaw.markup`⏎ … ⏎` ``) drops those line breaks, which belong to the TypeScript, and the
 * indentation that all its lines have in common. A template that starts on the backtick's line has a
 * first line with no indentation: its lines stay as written.
 */
function markupSource(src: string): string {
  const lines = src.split('\n')
  if (lines.length > 1 && /^[ \t]*$/.test(lines[0]!)) lines.shift()
  if (lines.length > 1 && /^[ \t]*$/.test(lines.at(-1)!)) lines.pop()
  const indents = lines.filter((l) => l.trim()).map((l) => /^[ \t]*/.exec(l)![0].length)
  const common = indents.length ? Math.min(...indents) : 0
  return lines.map((l) => l.slice(Math.min(common, /^[ \t]*/.exec(l)![0].length))).join('\n')
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
  const codes = Object.entries(bindings).map(([name, value]) => {
    const code = isMarkup(value) ? toContentCode(value) : toCode(value)
    return { name, code }
  })
  // A variable that already has its name (a parameter of a `define`, `{ it }`) needs no `let x = x`, and
  // hides nothing.
  const bound = codes.filter(({ name, code }) => !(code.k === 'ident' && !code.std && code.name === name))
  const names = bound.map(({ name }) => name)
  return bound.map(({ name, code }): StmtNode => {
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
    // The variables are bound one after the other: a value that names another variable of the
    // snippet would read that variable, not the document's binding of the name.
    const shadowed = [...namesIn(code)].find((n) => names.includes(n) && n !== name)
    if (shadowed)
      throw new TypeError(
        `unsafeRaw: the value of ${name} names ${shadowed}, which is also a variable of the snippet; rename one`,
      )
    return { k: 'let', name, params: null, value: code, snippet: true }
  })
}

function tag<R>(
  build: (src: string, stmts: StmtNode[], vars: boolean) => R,
  math = false,
  source: (raw: string) => string = dedent,
): RawTag<R> {
  return ((first: unknown, ...rest: unknown[]) => {
    if (isTemplate(first)) return build(source(literal(first, rest.length)), [], false)
    const bindings = first as Record<string, unknown>
    return (strings: TemplateStringsArray, ...more: unknown[]) => {
      const src = source(literal(strings, more.length))
      return build(src, lets(bindings, src, math), true)
    }
  }) as RawTag<R>
}

function codeOf(stmts: StmtNode[], value: Code): Code {
  return stmts.length ? { k: 'block', stmts, value } : value
}

function math(block: boolean): RawTag<Expr<'content'>> {
  // Whitespace at both edges makes an equation a block (`$ x $`): the tag decides, not the snippet.
  return tag((src, stmts) => expr(codeOf(stmts, { k: 'math', src: block ? src : src.trim(), block })), true)
}

export const unsafeRaw = {
  /** A code expression of the given Typst type. */
  code: tag((src, stmts) => expr(codeOf(stmts, { k: 'raw', src }))) as CodeTag,
  /**
   * Markup: a content block of its own, `#[…]`, wherever it goes (in a line too). Show a variable with
   * `#name`. Its set and show rules end with it: rules for what follows are `set` and `show`.
   */
  markup: tag(
    // Given variables, even ones that already have their names (no `let` prints), it is a content block.
    (src, stmts, vars): Content => expr({ k: 'snippet', stmts, src, vars }) as Content,
    false,
    markupSource,
  ) as RawTag<Content>,
  /** An inline equation, `$…$`. Show a variable with `#name`. */
  math: Object.assign(math(false), {
    /** A block equation, `$ … $`. */
    block: math(true),
  }),
}
