/** Typed constructors for Typst values. */
import {
  type Alignment,
  type Angle,
  type Auto,
  type Code,
  type Color,
  type Expr,
  type Fraction,
  type Label,
  type Length,
  type Paint,
  type Ratio,
  type Relative,
  type Content,
  type ContentArg,
  type Spread,
  type TypstFn,
  type TypstType,
  type TypstValue,
  type Inline,
  type DictArg,
  type Block,
  expr,
  isExpr,
  isMarkup,
  isPlainObject,
  markFile,
  type Literal,
  nodeOf,
  RT,
  SPREAD,
} from './core.ts'
import { nested, ownItems, toCode, toContentCode, valueNode } from './convert.ts'
import { assertFileArg, type Value } from './element.ts'
import { assertIdent, assertLabelName, intLiteral, numberLiteral, plainDecimal } from './escape.ts'

/**
 * A value with a unit. Arithmetic in JS leaves noise in the last digits
 * (`246.20000000000002`): 15 significant digits, what a double holds exactly,
 * print it as meant (`246.2mm`).
 */
const unit =
  <T extends string>(u: string) =>
  (n: number): Value<T> =>
    expr({ k: 'lit', v: plainDecimal(Number.isFinite(n) ? Number(n.toPrecision(15)) : n) + u }) as Value<T>

export const pt = unit<'length'>('pt')
export const mm = unit<'length'>('mm')
export const cm = unit<'length'>('cm')
export const inches = unit<'length'>('in')
export const em = unit<'length'>('em')
export const pct = unit<'ratio'>('%')
export const fr = unit<'fraction'>('fr')
export const deg = unit<'angle'>('deg')
export const rad = unit<'angle'>('rad')

export const auto: Auto = expr({ k: 'lit', v: 'auto' })
/** `none` is JS `null`; this constant is only for readability. */
export const none = null

// With the methods of their type, as every value has (`left.inv()`, `ltr.axis()`).
const ident = <T extends string>(name: string): Value<T> => expr({ k: 'ident', name, std: true }) as Value<T>

// Alignments.
export const left = ident<'alignment'>('left')
export const center = ident<'alignment'>('center')
export const right = ident<'alignment'>('right')
export const start = ident<'alignment'>('start')
export const end = ident<'alignment'>('end')
export const top = ident<'alignment'>('top')
export const horizon = ident<'alignment'>('horizon')
export const bottom = ident<'alignment'>('bottom')

// Directions.
export const ltr = ident<'direction'>('ltr')
export const rtl = ident<'direction'>('rtl')
export const ttb = ident<'direction'>('ttb')
export const btt = ident<'direction'>('btt')

/** A color value, with the methods of Typst's color type (`lighten`, `mix`, …). */
/** A color, with the methods of colors (`aqua.lighten(pct(50))`). */
export type ColorValue = Value<'color'>
const color = (name: string): ColorValue => ident<'color'>(name) as ColorValue

// The predefined colors.
export const black = color('black')
export const gray = color('gray')
export const silver = color('silver')
export const white = color('white')
export const navy = color('navy')
export const blue = color('blue')
export const aqua = color('aqua')
export const teal = color('teal')
export const eastern = color('eastern')
export const purple = color('purple')
export const fuchsia = color('fuchsia')
export const maroon = color('maroon')
export const red = color('red')
export const orange = color('orange')
export const yellow = color('yellow')
export const olive = color('olive')
export const green = color('green')
export const lime = color('lime')

function call<T extends string>(name: string, args: Code[]): Expr<T> {
  return expr({
    k: 'call',
    callee: { k: 'ident', name, std: true },
    args: args.map((value) => ({ name: null, value })),
    trailing: null,
  })
}

const byte = (n: number): Code => {
  if (!Number.isInteger(n) || n < 0 || n > 255) throw new RangeError(`expected an integer in 0–255, got ${n}`)
  return { k: 'lit', v: intLiteral(n) }
}

/** `rgb("#a0aec0")` or `rgb(160, 174, 192)`. */
/** A hex color, with or without `#`; checked at runtime. */
export function rgb(hex: string): ColorValue
/** A color converted to RGB. */
export function rgb(color: Color): ColorValue
/** Components are 0–255 or ratios (`pct(50)`). */
export function rgb(r: number | Ratio, g: number | Ratio, b: number | Ratio, a?: number | Ratio): ColorValue
export function rgb(...args: unknown[]): ColorValue {
  if (args.length === 1 && isExpr(args[0])) return call<'color'>('rgb', [nodeOf(args[0])]) as ColorValue
  if (typeof args[0] === 'string') {
    const hex = args[0] as string
    // Typst also takes the digits without `#`.
    if (!/^#?(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hex)) throw new TypeError(`not a hex color: ${hex}`)
    return call<'color'>('rgb', [{ k: 'str', v: hex }]) as ColorValue
  }
  return call<'color'>(
    'rgb',
    (args as (number | Ratio)[]).map((a) => (typeof a === 'number' ? byte(a) : nodeOf(a))),
  ) as ColorValue
}

// As values (`color.mix(…, space: luma)`), `rgb` and `luma` print as their names.
Object.defineProperty(rgb, RT, { value: { path: 'rgb', pos: [], named: {} } })

/** A gray level: `luma(0–255)`, a ratio, or a color converted to gray; with an alpha (0–255 or a ratio). */
export function luma(level: number | Ratio | Color, alpha?: number | Ratio): ColorValue {
  if (alpha === undefined) return lumaOf(level)
  const part = (x: number | Ratio | Color) => (typeof x === 'number' ? byte(x) : nodeOf(x))
  return call<'color'>('luma', [part(level), part(alpha)]) as ColorValue
}
Object.defineProperty(luma, RT, { value: { path: 'luma', pos: [], named: {} } })

function lumaOf(level: number | Ratio | Color): ColorValue {
  return call<'color'>('luma', [typeof level === 'number' ? byte(level) : nodeOf(level)]) as ColorValue
}

/** `a + b`, typed by Typst's addition rules. */
export function add(a: Length, b: Length): Value<'length'>
export function add(a: Ratio, b: Ratio): Value<'ratio'>
export function add(a: Fraction, b: Fraction): Value<'fraction'>
export function add(a: Angle, b: Angle): Value<'angle'>
export function add(a: Relative, b: Relative): Value<'relative'>
export function add(a: Length, b: Paint): Value<'stroke'>
export function add(a: Paint, b: Length): Value<'stroke'>
export function add(a: Alignment, b: Alignment): Value<'alignment'>
export function add(a: Expr<'int'> | number, b: Expr<'int'> | number): Value<'int'>
export function add(a: Expr<'int' | 'float'> | number, b: Expr<'int' | 'float'> | number): Value<'int' | 'float'>
/** Numbers whose kind only Typst knows (`calc.rem(…)` is an int, a float or a decimal). */
export function add(
  a: Expr<'int' | 'float' | 'decimal'> | number,
  b: Expr<'int' | 'float' | 'decimal'> | number,
): Value<'int' | 'float' | 'decimal'>
/** A symbol or a string plus a string is a string (`emptyset + "\u{fe00}"`). */
export function add(a: Expr<'str' | 'symbol'> | string, b: Expr<'str' | 'symbol'> | string): Value<'str'>
/** A date plus a duration is a date; durations add up. */
export function add(a: Expr<'datetime'>, b: Expr<'duration'>): Value<'datetime'>
export function add(a: Expr<'duration'>, b: Expr<'datetime'>): Value<'datetime'>
export function add(a: Expr<'duration'>, b: Expr<'duration'>): Value<'duration'>
/** A decimal with a decimal or an int is a decimal. */
export function add(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function add(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
/** Bytes and arguments concatenate. */
export function add(a: Expr<'bytes'>, b: Expr<'bytes'>): Value<'bytes'>
export function add(a: Expr<'arguments'>, b: Expr<'arguments'>): Value<'arguments'>
/** Dictionaries merge, the right one winning: `config + (title: "…")`. */
export function add(a: DictArg | Expr<'dictionary'>, b: DictArg | Expr<'dictionary'>): Value<'dictionary'>
/** Arrays concatenate: `(4em,) * 7 + (auto,)`. A JS array is an array here, as at runtime. */
export function add(a: readonly TypstValue[] | Expr<'array'>, b: readonly TypstValue[] | Expr<'array'>): Value<'array'>
/** Content joins content: `it.body + [!]`. */
export function add(a: ContentArg, b: ContentArg): Content
export function add(a: unknown, b: unknown): Expr<string> {
  // Markup is content; anything else (arrays, data) is a value.
  const code = (v: unknown) => (isMarkup(v) ? toContentCode(v) : toCode(v))
  return expr({ k: 'binop', op: '+', l: code(a), r: code(b) })
}

type Arithmetic = 'length' | 'ratio' | 'relative' | 'fraction' | 'angle' | 'int' | 'float' | 'decimal' | 'duration'

/** `a - b` for lengths, numbers and similar; dates and durations by Typst's rules. */
export function minus(a: Expr<'datetime'>, b: Expr<'datetime'>): Value<'duration'>
export function minus(a: Expr<'datetime'>, b: Expr<'duration'>): Value<'datetime'>
export function minus(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function minus(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
export function minus<T extends Arithmetic>(a: Expr<T> | number, b: Expr<T> | number): Value<T>
export function minus(a: TypstValue, b: TypstValue): Expr<string> {
  return expr({ k: 'binop', op: '-', l: toCode(a), r: toCode(b) })
}

/** `a / b`: a length, an angle, a ratio or a number divided by a number, or by a value of its kind (a float). */
export function div(a: number | Expr<'int' | 'float'>, b: number | Expr<'int' | 'float'>): Value<'float'>
export function div(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function div<T extends Arithmetic>(a: Expr<T>, b: number | Expr<'int' | 'float'>): Value<T>
export function div<T extends Arithmetic>(a: Expr<T>, b: Expr<T>): Value<'float'>
export function div(a: TypstValue, b: TypstValue): Expr<string> {
  return expr({ k: 'binop', op: '/', l: toCode(a), r: toCode(b) })
}

/** `-x`: a number, a length or another value of a kind that has a sign, negated. */
export function neg<T extends Arithmetic>(a: Expr<T>): Value<T>
export function neg(a: number): Value<'int' | 'float'>
export function neg(a: TypstValue): Expr<string> {
  return expr({ k: 'neg', v: toCode(a) })
}

type Count = number | Expr<'int'>

/** `x * n` and `n * x`: a length, a number or similar scaled; an array, a string or content repeated. Prints in the order given. */
export function times(a: number | Expr<'int' | 'float'>, b: number | Expr<'int' | 'float'>): Value<'int' | 'float'>
/** Decimals multiply with decimals and ints; ratios with ratios. */
export function times(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function times(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
export function times(a: Expr<'ratio'>, b: Expr<'ratio'>): Value<'ratio'>
export function times<T extends Arithmetic>(a: Expr<T> | number, n: number | Expr<'int' | 'float'>): Value<T>
export function times<T extends Arithmetic>(n: number | Expr<'int' | 'float'>, a: Expr<T>): Value<T>
export function times(a: readonly TypstValue[] | Expr<'array'>, n: Count): Value<'array'>
export function times(n: Count, a: readonly TypstValue[] | Expr<'array'>): Value<'array'>
export function times(a: string | Expr<'str'>, n: Count): Value<'str'>
export function times(n: Count, a: string | Expr<'str'>): Value<'str'>
export function times(a: Inline | Block | Expr<'content'>, n: Count): Value<'content'>
export function times(n: Count, a: Inline | Block | Expr<'content'>): Value<'content'>
export function times(a: TypstValue, b: TypstValue): Value<string> {
  return expr({ k: 'binop', op: '*', l: toCode(a), r: toCode(b) }) as Value<string>
}

/**
 * A file path, for `image`, `read`, `json` and the other functions that load
 * files. Only a literal compiles: data must never choose which file the
 * document reads. (For a file that data selects, map the data to literals in
 * code, or pass the file's bytes.)
 */
export function path<const P extends string>(p: Literal<P>): Expr<'path'> {
  if (typeof p !== 'string') throw new TypeError('path takes a string literal')
  return markFile(call('path', [{ k: 'str', v: p }]))
}

/**
 * `read(path)`: the contents of a file, as text, or as bytes with `{ encoding: null }`.
 * Written by hand because the result type depends on the encoding.
 */
export function read(path: Expr<'path'>): Expr<'str'>
export function read(options: { readonly encoding: 'utf8' }, path: Expr<'path'>): Expr<'str'>
export function read(options: { readonly encoding: null }, path: Expr<'path'>): Expr<'bytes'>
export function read(...args: unknown[]): Expr<string> {
  const [options, path] = args.length === 2 ? args : [undefined, args[0]]
  assertFileArg(path, [], 'read')
  if (!isExpr(path)) throw new TypeError("read takes a path built with path('…')")
  const encoding = (options as { encoding?: unknown } | undefined)?.encoding
  const named =
    encoding === undefined
      ? []
      : [
          {
            name: 'encoding',
            value: encoding === null ? ({ k: 'lit', v: 'none' } as Code) : ({ k: 'str', v: 'utf8' } as Code),
          },
        ]
  const result = expr({
    k: 'call',
    callee: { k: 'ident', name: 'read', std: true },
    args: [{ name: null, value: nodeOf(path) }, ...named],
    trailing: null,
  })
  // Bytes may go where a file goes (`image(read(path('a.svg'), { encoding: null }))`).
  return encoding === null ? markFile(result) : result
}
Object.defineProperty(read, RT, { value: { path: 'read', pos: [], named: {}, reads: true } })

/**
 * Asserts the Typst type of an expression, for TypeScript only: the printed source is the same.
 * For where you know more than the bindings, such as a field of `it` in a show rule, typed with
 * everything its parameter accepts (`it.inset` is a length, a dictionary or `auto`) while the value
 * there is resolved. A wrong assertion is a Typst error at compile time, never a way for data to
 * become code. Grep for `assume` to review them.
 */
export function assume<T extends string>(e: Expr<string>): Value<T> {
  if (!isExpr(e)) throw new TypeError('assume takes an expression')
  return e as unknown as Value<T>
}

/** A label. The name is checked against the label syntax. */
export function label(name: string): Label {
  // Any name works in code (`label("DBLP:books/x")`); only names of label syntax attach in markup.
  if (typeof name !== 'string' || name === '') throw new TypeError('a label name is a non-empty string')
  return expr({ k: 'label', name })
}

/** JSON-like data, which may also hold Typst values (`pt(1)`, markup). */
export type DataValue =
  | string
  | number
  | bigint
  | boolean
  | null
  | Expr<string>
  | TypstFn
  | TypstType
  | Inline
  | Block
  | readonly DataValue[]
  | { readonly [key: string]: DataValue | undefined }

/**
 * A file path that the program computes (`assets/${hash}.png`), where
 * `path('…')` takes only literals; or a value that Typst computes, from a
 * template the program trusts (`unsafePath(external('logo'))` prints `logo`, as
 * it is: a path, a string, or a name the parameter takes). This is the one way
 * for a computed value to choose which file the document reads: use it only
 * with paths the program or its templates build, never with input from users.
 * Grep for `unsafePath` to audit every use.
 */
export function unsafePath(p: string | Expr<string>): Expr<'path'> {
  if (typeof p === 'string') return markFile(call('path', [{ k: 'str', v: p }]))
  if (isExpr(p)) return markFile(expr(nodeOf(p))) as Expr<'path'>
  throw new TypeError('unsafePath takes a string or an expression')
}

/**
 * `..values`: the items of an array as the variadic arguments of a call
 * (`grid(spread(cells))`, `gradient.linear(spread(color.map.rainbow))`). Only
 * Typst knows the types of the items.
 */
export function spread(values: Expr<'array' | 'arguments' | 'dictionary'> | readonly TypstValue[]): Spread {
  return Object.freeze({ [SPREAD]: toCode(values) })
}

/**
 * A dictionary whose keys are written as they are: unlike a plain object,
 * `dict({ showTitle: true })` keeps `showTitle` (for a template that reads that
 * key). Keys print as identifiers when they can, else as strings.
 */
export function dict(v: { readonly [key: string]: TypstValue | undefined }): Value<'dictionary'> {
  const entries: [{ ident: string } | { str: string }, Code][] = []
  for (const [key, value] of Object.entries(v)) {
    if (value === undefined) continue
    // ASCII identifiers only: Unicode's identifier characters change between versions (JS may know more than Typst).
    let ident = /^[A-Za-z_][A-Za-z0-9_-]*$/.test(key)
    try {
      assertIdent(key)
    } catch {
      ident = false
    }
    entries.push([ident ? { ident: key } : { str: key }, toCode(value)])
  }
  return expr({ k: 'dict', entries }) as Value<'dictionary'>
}

/**
 * JSON-like data as a Typst value. Unlike other objects, keys are data too:
 * every key prints as a string (`("any key": 1)`).
 */
export function data(v: readonly DataValue[]): Value<'array'>
export function data(v: { readonly [key: string]: DataValue | undefined }): Value<'dictionary'>
export function data(v: string): Value<'str'>
export function data(v: number): Expr<'int' | 'float'>
export function data(v: boolean): Value<'bool'>
export function data(v: DataValue): Expr<string>
export function data(v: DataValue): Expr<string> {
  return expr(dataCode(v))
}

function dataCode(v: DataValue): Code {
  return nested(() => dataCodeAt(v))
}

function dataCodeAt(v: DataValue): Code {
  if (v === null) return { k: 'lit', v: 'none' }
  if (v === undefined) throw new TypeError('data has no undefined (a missing value, or a hole in an array): use null')
  if (typeof v === 'string') {
    if (!v.isWellFormed())
      throw new TypeError(
        'Typst cannot represent a string with a lone surrogate (half of a UTF-16 pair); fix the data, or replace it with str.toWellFormed()',
      )
    return { k: 'str', v }
  }
  if (typeof v === 'number') return { k: 'lit', v: numberLiteral(v) }
  if (typeof v === 'boolean') return { k: 'lit', v: String(v) }
  if (Array.isArray(v)) return { k: 'array', items: ownItems(v).map((x) => dataCode(x as DataValue)) }
  // A Typst value inside the data: an expression, or markup as content.
  if (isExpr(v)) return valueNode(v)
  if (isMarkup(v)) return toContentCode(v)
  // A function or a type of the standard library (`heading`, `color.hsv`), or a closure, prints as code.
  if (typeof v === 'function' || typeof v === 'bigint' || (typeof v === 'object' && RT in v)) return toCode(v)
  // What JSON.parse makes, and nothing else: a Date or a Map would print as `(:)`, a class instance
  // without its getters.
  if (!isPlainObject(v))
    throw new TypeError(
      `data takes JSON-like values: plain objects, arrays, strings, numbers, booleans and null, not ${describeObject(v)}. ` +
        'Convert it first: { ...obj }, date.toISOString() or datetime(…), Object.fromEntries(map).',
    )
  const entries: [{ str: string }, Code][] = []
  for (const [key, value] of Object.entries(v)) {
    if (value !== undefined) entries.push([{ str: key }, dataCode(value)])
  }
  return { k: 'dict', entries }
}

function describeObject(v: object): string {
  const name = (Object.getPrototypeOf(v) as { constructor?: { name?: string } } | null)?.constructor?.name
  return name ? `a ${name}` : 'this object'
}
