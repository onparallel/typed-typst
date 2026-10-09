/**
 * Node model and the typed public surface.
 *
 * Every value a user can build is one of four things:
 * - `Expr<T>`: a code expression whose Typst type is `T`;
 * - `Inline`: markup that can be printed inside a line;
 * - `Block`: markup that needs its own lines (paragraphs, headings, lists);
 * - `Stmt`: a statement (`set`, `show`, `let`, `import`).
 *
 * The printer decides the syntax (`#`, `[…]`, `;`) from the position of a
 * node, so the user never writes Typst syntax.
 */

export const NODE = Symbol('typst.node')
export const FLOW = Symbol('typst.flow')
/** Marks a generated function; holds its runtime table (see element.ts). */
export const RT = Symbol('typst.rt')
export const SPREAD = Symbol('typst.spread')
/** On a `T.oneOf` parameter: the names it can be (see define.ts). */
export const NAMES = Symbol('typst.names')
export declare const TYPE: unique symbol

/** A code expression whose Typst type is one of `T`. */
declare const TYPE_VALUE: unique symbol
/**
 * A type of the standard library as a value (`dictionary`, `str`), where Typst
 * takes a type: `csv({ rowType: dictionary }, …)`. It prints as its name.
 */
export interface TypstType {
  readonly [TYPE_VALUE]: true
}

export interface Expr<out T extends string> {
  readonly [NODE]: Code
  readonly [TYPE]: T
}

export interface Inline {
  readonly [FLOW]: 'inline'
  readonly nodes: readonly InlineNode[]
}

export interface Block {
  readonly [FLOW]: 'block'
  readonly items: readonly BlockNode[]
}

export interface Stmt {
  readonly [FLOW]: 'stmt'
  readonly stmt: StmtNode
}

export type Content = Expr<'content'>
export type Length = Expr<'length'>
export type Ratio = Expr<'ratio'>
export type Relative = Expr<'length' | 'ratio' | 'relative'>
export type Fraction = Expr<'fraction'>
export type Angle = Expr<'angle'>
export type Color = Expr<'color'>
export type Paint = Expr<'color' | 'gradient' | 'tiling'>
export type Alignment = Expr<'alignment'>
export type Auto = Expr<'auto'>
export type Label = Expr<'label'>

/**
 * A string that is one of `N`: a `T.oneOf` parameter of a `define`, whose
 * callers were checked. It goes where Typst takes one of some names, also
 * where it would read any other string as a file (`bibliography(style: …)`).
 */
export interface OneOf<out N extends string> extends Expr<'str'> {
  readonly [NAMES]: readonly N[]
}

/** `..values` in the variadic arguments of a call (see `spread` in values.ts). */
export interface Spread {
  readonly [SPREAD]: Code
}

/** Parts that composition skips, so that `cond && x` works. */
export type Skip = false | null | undefined
/** Anything that can be shown inside a line of markup. */
/** `Expr<'any'>` is a value whose type reflection does not know (`counter.display()`). */
export type InlineArg =
  string | number | Inline | Stmt | Expr<'content' | 'str' | 'symbol' | 'none' | 'any'> | Skip | readonly InlineArg[]
/**
 * Anything that markup can show. In markup, `#x` shows any value (an array, a
 * length…), so `inline` and friends take any expression; a content parameter
 * of a function does not (`ContentArg`).
 */
export type ShowArg = InlineArg | Expr<string> | TypstFn | readonly ShowArg[]
/** Anything that Typst accepts as `content`. */
export type ContentArg = InlineArg | Block | readonly ContentArg[]
/** Anything that can be a part of a document body. */
export type BlockArg = ContentArg | Stmt | readonly BlockArg[]

/** Plain objects become dictionaries with identifier keys (camelCase keys print as kebab-case). */
export interface DictArg {
  readonly [key: string]: TypstValue | undefined
}
/** JS functions become Typst closures; their parameters are expressions. */
/** Marks the functions that `define` creates (their overloaded signature is no plain JS function type). */
export declare const DEFINED_FN: unique symbol
/** The named parameters of a `define` function, for `NamedOf` (types only). */
export declare const DEFINED_NAMED: unique symbol
export type TypstFn = Expr<'function'> | ((...args: any[]) => TypstValue) | { readonly [DEFINED_FN]: true }
export type TypstValue =
  | Expr<string>
  | string
  | number
  | bigint
  | boolean
  | null
  | Inline
  | Block
  | TypstFn
  | TypstType
  | readonly TypstValue[]
  | DictArg

// ---------------------------------------------------------------------------
// Internal tree.

export type Code =
  | { k: 'str'; v: string }
  | { k: 'lit'; v: string } // a number, unit or keyword literal, already printed
  // `std`: a name of the standard library, written `std.name` where the document binds that name.
  /** `reader`: a name the document must bind (an import), or it is the standard library's `eval`, `image`… */
  /** `ext`: a name from outside the document (`external`), which must not be one the document defines. */
  | { k: 'ident'; name: string; std?: true; reader?: true; ext?: true }
  | { k: 'field'; target: Code; name: string }
  | { k: 'call'; callee: Code; args: Arg[]; trailing: Markup | null }
  | { k: 'binop'; op: '+' | '-' | '*' | '/' | '=='; l: Code; r: Code }
  /** `-x`. */
  | { k: 'neg'; v: Code }
  | { k: 'array'; items: Code[] }
  | { k: 'dict'; entries: [key: DictKey, value: Code][] }
  | { k: 'label'; name: string }
  | { k: 'closure'; params: string[]; body: Code }
  | { k: 'content'; body: Markup }
  | { k: 'context'; body: Code }
  | { k: 'block'; stmts: StmtNode[]; value: Code | null }
  | { k: 'raw'; src: string }
  | { k: 'math'; src: string; block: boolean } // an equation, `$…$`
  | { k: 'include'; source: string } // `include "file.typ"`

export type DictKey = { ident: string } | { str: string }
export interface Arg {
  name: string | null
  value: Code
  /** `..value`: an array spread into the variadic arguments. */
  spread?: true
}
export type Markup = { inline: readonly InlineNode[] } | { blocks: readonly BlockNode[] }

export type InlineNode =
  /** `prose`: text written as prose (an `inline` template's own text, `prose(…)`), where Typst's typography applies. */
  | { k: 'text'; v: string; prose?: true }
  // A markup space: collapses like one, unlike a space in data. `line`: written as a line break.
  | { k: 'space'; line?: true }
  | { k: 'stmt'; stmt: StmtNode } // a rule in a line: it applies to the rest of the paragraph
  | { k: 'embed'; code: Code }
  | { k: 'label'; name: string }
  | { k: 'raw'; src: string }

export type BlockNode =
  | { k: 'par'; inline: readonly InlineNode[] }
  | { k: 'heading'; level: number; inline: readonly InlineNode[] }
  | { k: 'list' | 'enum' | 'terms'; items: readonly ListItemNode[]; tight: boolean }
  | { k: 'stmt'; stmt: StmtNode }
  | { k: 'raw'; src: string }
  | { k: 'lines'; items: readonly BlockNode[] } // blocks with no paragraph break between them

export interface ListItemNode {
  inline: readonly InlineNode[]
  /** Blocks on the lines after the item's text, with no paragraph break (`m.item(m.lines(…))`). */
  continued?: readonly BlockNode[]
  children: readonly BlockNode[]
  /** An explicit enum number (`3. item`). */
  number?: number
  /** The term of a term list item (`/ term: description`). */
  term?: readonly InlineNode[]
}

export interface Param {
  name: string
  default?: Code
  rest?: boolean
  /** A `T.path` or `T.bytes` parameter: the body may pass it where Typst reads a file. */
  file?: true
}

export type StmtNode =
  // `cond`: `set … if cond`, the rule applies only when the condition holds.
  | { k: 'set'; target: Code; args: Arg[]; cond?: Code }
  | { k: 'show'; selector: Code | null; replacement: Code | StmtNode }
  // `file`: the value is a file (`path('…')`), which references may pass where Typst reads one.
  // `snippet`: a variable of an `unsafeRaw` snippet.
  | { k: 'let'; name: string; params: Param[] | null; value: Code; file?: true; snippet?: true }
  /** `let (a, b, _) = value`: an array or a dictionary, by position or by key; `null` is `_`. */
  | { k: 'let-pattern'; names: readonly (string | null)[]; value: Code }
  // `import "x": a, b as c`, or `import "x" as m` (`module`).
  | { k: 'import'; source: string; items: (string | { name: string; as: string })[]; module?: string }
  | { k: 'expr'; code: Code }

// ---------------------------------------------------------------------------
// Construction and inspection.

/**
 * The prototype of every expression: the methods of Typst's types, by name
 * (element.ts installs them). Typst dispatches a method on the type of the
 * value, so `x.len()` prints the same whatever `x` is; the types decide which
 * methods a value offers.
 */
export const EXPR_PROTO: Record<string, unknown> = {}

export function expr<T extends string>(node: Code): Expr<T> {
  return Object.freeze(Object.create(EXPR_PROTO, { [NODE]: { value: node, enumerable: true } })) as Expr<T>
}

/** The token that `context` passes to its callback (see `Ctx` in element.ts). */
export class CtxToken {
  declare readonly __ctx: true
}

export function inlineOf(nodes: readonly InlineNode[]): Inline {
  return Object.freeze({ [FLOW]: 'inline', nodes }) as Inline
}

export function blockOf(items: readonly BlockNode[]): Block {
  return Object.freeze({ [FLOW]: 'block', items }) as Block
}

export function stmtOf(stmt: StmtNode): Stmt {
  return Object.freeze({ [FLOW]: 'stmt', stmt }) as Stmt
}

export function isSpread(v: unknown): v is Spread {
  return typeof v === 'object' && v !== null && SPREAD in v
}

export function isExpr(v: unknown): v is Expr<string> {
  return typeof v === 'object' && v !== null && NODE in v
}

export function isMarkup(v: unknown): v is Inline | Block {
  return typeof v === 'object' && v !== null && FLOW in v && (v[FLOW] === 'inline' || v[FLOW] === 'block')
}

export function isStmt(v: unknown): v is Stmt {
  return typeof v === 'object' && v !== null && FLOW in v && v[FLOW] === 'stmt'
}

export function isPlainObject(v: unknown): v is Record<string, unknown> {
  if (typeof v !== 'object' || v === null || Array.isArray(v)) return false
  const proto = Object.getPrototypeOf(v)
  return (proto === Object.prototype || proto === null) && !(NODE in v) && !(FLOW in v) && !(SPREAD in v)
}

export function nodeOf(e: Expr<string>): Code {
  // Where the types allow only an expression, a plain value from untyped code fails here, clearly.
  if (!isExpr(e)) throw new TypeError(`expected a Typst expression, got ${e === null ? 'null' : typeof e}`)
  return e[NODE]
}

/**
 * A string literal type (or a union of them), never `string` itself nor a template literal
 * type such as `` `files/${string}` ``, which data could fill in.
 */
export type Literal<N extends string> = N extends unknown
  ? Record<never, never> extends Record<N, unknown>
    ? never
    : N
  : never

/**
 * Expressions the library knows are a file or bytes: `path('…')`, `unsafePath(…)`, bytes a function
 * makes, and bindings of those (`let_`, a `T.path` parameter). Only these go where Typst reads a
 * file: a value computed in Typst could hold any string from data.
 */
const FILE_VALUES = new WeakSet<object>()

export function markFile<E extends object>(e: E): E {
  FILE_VALUES.add(e)
  return e
}

export function isFileValue(v: unknown): boolean {
  return typeof v === 'object' && v !== null && FILE_VALUES.has(v)
}

/**
 * Function values that read files when called (`csv.with()`, a `define` with a `T.path` parameter):
 * Typst would call them with values it computes, which could be any string of data. Only a selector or a kind may hold one (see `toCode`).
 */
const READER_VALUES = new WeakSet<object>()

export function markReader<E extends object>(e: E): E {
  READER_VALUES.add(e)
  return e
}

export function isReaderValue(v: unknown): boolean {
  return typeof v === 'object' && v !== null && READER_VALUES.has(v)
}

/** Parameters of closures and `define`s: a field of one is a value only Typst knows (`it.kind`). */
const PARAM_NODES = new WeakSet<object>()

export function markParam(node: Code): Code {
  PARAM_NODES.add(node)
  return node
}

export function isParamNode(node: Code): boolean {
  return PARAM_NODES.has(node)
}
