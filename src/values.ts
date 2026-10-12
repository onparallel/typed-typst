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
  type Stmt,
  type DictArg,
  type Block,
  expr,
  isExpr,
  isMarkup,
  isPlainObject,
  type Digits,
  type Literal,
  nodeOf,
  RT,
  SPREAD,
} from './core.ts'
import { nested, ownItems, toCode, toContentCode } from './convert.ts'
import { assertFileArg, type Value } from './element.ts'
import { assertIdent, assertLabelName, intLiteral, numberLiteral, plainDecimal, significant } from './escape.ts'

/** A value with a unit, with 15 significant digits as every number (`246.2mm`, see `significant`). */
const unit =
  <T extends string>(u: string) =>
  (n: number): Value<T> =>
    expr({ k: 'lit', v: plainDecimal(significant(n)) + u }) as Value<T>

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

/** A color, with the methods of Typst's color type (`aqua.lighten(pct(50))`, `negate`, …). */
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

/** A color component: 0–255 or a ratio, or a value Typst computes. */
type Component = number | Ratio | Expr<'int'>

/** `rgb("#a0aec0")` or `rgb(160, 174, 192)`: a hex color, with or without `#`, checked at runtime. */
export function rgb(hex: string | Expr<'str'>): ColorValue
/** A color converted to RGB. */
export function rgb(color: Color): ColorValue
/** Components are 0–255 or ratios (`pct(50)`); a component Typst computes is an int or a ratio. */
export function rgb(r: Component, g: Component, b: Component, a?: Component | undefined): ColorValue
export function rgb(...input: unknown[]): ColorValue {
  // A trailing `undefined` leaves the alpha out, as in `luma` and the generated functions.
  const args = input.at(-1) === undefined ? input.slice(0, -1) : input
  if (args.length === 1 && isExpr(args[0])) return call<'color'>('rgb', [nodeOf(args[0])]) as ColorValue
  if (typeof args[0] === 'string') {
    const hex = args[0] as string
    // Typst also takes the digits without `#`.
    if (!/^#?(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hex)) throw new TypeError(`not a hex color: ${hex}`)
    return call<'color'>('rgb', [{ k: 'str', v: hex }]) as ColorValue
  }
  return call<'color'>(
    'rgb',
    (args as Component[]).map((a) => (typeof a === 'number' ? byte(a) : nodeOf(a))),
  ) as ColorValue
}

// As values (`color.mix(…, space: luma)`), `rgb` and `luma` print as their names.
Object.defineProperty(rgb, RT, { value: { path: 'rgb', pos: [], named: {} } })

/** A gray level: `luma(0–255)` or a ratio, with an alpha that is a ratio (`luma(40, pct(50))`). */
export function luma(level: Component, alpha?: Ratio | undefined): ColorValue
/** A color converted to gray (no alpha: Typst takes none there). */
export function luma(color: Color): ColorValue
export function luma(level: Component | Color, alpha?: Ratio | undefined): ColorValue {
  if (alpha === undefined) return lumaOf(level)
  const part = (x: Component | Color) => (typeof x === 'number' ? byte(x) : nodeOf(x))
  return call<'color'>('luma', [part(level), part(alpha)]) as ColorValue
}
Object.defineProperty(luma, RT, { value: { path: 'luma', pos: [], named: {} } })

function lumaOf(level: Component | Color): ColorValue {
  return call<'color'>('luma', [typeof level === 'number' ? byte(level) : nodeOf(level)]) as ColorValue
}

/**
 * Numbers: a JS number may be an int or a float. Arithmetic on numbers known in JS is best done in JS;
 * these types are for values only Typst knows.
 */
type Num = number | Expr<'int' | 'float'>
/** An operand whose kind only Typst knows (`Expr<any>`, a callback's parameter): the result's is unknown too. */
type Unknown<N> = 0 extends 1 & N ? true : N extends Expr<infer K> ? (string extends K ? true : false) : false
type IfUnknown<A, B> = true extends Unknown<A> | Unknown<B> ? unknown : never
/** An int: an int expression, or a number literal without a fraction or an exponent (`2`, not `2.5`). */
type IfInt<N> =
  N extends Expr<'int'>
    ? unknown
    : N extends number
      ? number extends N
        ? never
        : `${N}` extends `${string}.${string}` | `${string}e${string}`
          ? never
          : // Past 2^53 a literal prints as a float (see `NumberOf`).
            Digits<`${N}`> extends 16 | 17 | 18 | 19 | 20 | 21 | 22
            ? never
            : unknown
      : never
/** A number whose kind may be any of them (`calc.rem(…)`). */
type AnyNum = number | Expr<'int' | 'float' | 'decimal'>
/** Kinds scaled by a number. */
type Scalable = 'length' | 'ratio' | 'relative' | 'fraction' | 'angle' | 'duration'
type ContentOperand = string | Inline | Block | Expr<'content' | 'str' | 'symbol' | 'none'>

/** `a + b`, typed by Typst's addition rules. */
export function add<A, B>(a: A & IfUnknown<A, B>, b: B & IfUnknown<A, B>): Value<any>
export function add(a: Length, b: Length): Value<'length'>
export function add(a: Ratio, b: Ratio): Value<'ratio'>
export function add(a: Fraction, b: Fraction): Value<'fraction'>
export function add(a: Angle, b: Angle): Value<'angle'>
export function add(a: Relative, b: Relative): Value<'relative'>
export function add(a: Length, b: Paint): Value<'stroke'>
export function add(a: Paint, b: Length): Value<'stroke'>
export function add(a: Alignment, b: Alignment): Value<'alignment'>
/** Numbers by Typst's rules: ints stay ints, a float makes a float, a decimal mixes with ints only. */
export function add<const A extends Num, const B extends Num>(a: A & IfInt<A>, b: B & IfInt<B>): Value<'int'>
export function add(a: Num, b: Num): Value<'int' | 'float'>
export function add(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function add(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
export function add(a: AnyNum, b: AnyNum): Value<'int' | 'float' | 'decimal'>
/** A symbol or a string plus a string is a string (`emptyset + "\u{fe00}"`). */
export function add(a: Expr<'str' | 'symbol'> | string, b: Expr<'str' | 'symbol'> | string): Value<'str'>
/** A date plus a duration is a date; durations add up. */
export function add(a: Expr<'datetime'>, b: Expr<'duration'>): Value<'datetime'>
export function add(a: Expr<'duration'>, b: Expr<'datetime'>): Value<'datetime'>
export function add(a: Expr<'duration'>, b: Expr<'duration'>): Value<'duration'>
/** Bytes and arguments concatenate. */
export function add(a: Expr<'bytes'>, b: Expr<'bytes'>): Value<'bytes'>
export function add(a: Expr<'arguments'>, b: Expr<'arguments'>): Value<'arguments'>
/** Dictionaries merge, the right one winning: `config + (title: "…")`. */
export function add(a: DictArg | Expr<'dictionary'>, b: DictArg | Expr<'dictionary'>): Value<'dictionary'>
/** Arrays concatenate: `(4em,) * 7 + (auto,)`. A JS array is an array here, as at runtime. */
export function add(a: readonly TypstValue[] | Expr<'array'>, b: readonly TypstValue[] | Expr<'array'>): Value<'array'>
/** Content joins content and strings: `it.body + [!]` (a number or a JS array would be a value). */
export function add(a: ContentOperand, b: ContentOperand): Content
export function add(a: unknown, b: unknown): Expr<string> {
  // Markup is content; anything else (arrays, data) is a value.
  const code = (v: unknown) => (isMarkup(v) ? toContentCode(v) : toCode(v))
  return expr({ k: 'binop', op: '+', l: code(a), r: code(b) })
}

type Arithmetic = 'length' | 'ratio' | 'relative' | 'fraction' | 'angle' | 'int' | 'float' | 'decimal' | 'duration'

/** `a - b` for lengths, numbers and similar; dates and durations by Typst's rules. */
export function minus<A, B>(a: A & IfUnknown<A, B>, b: B & IfUnknown<A, B>): Value<any>
export function minus(a: Length, b: Length): Value<'length'>
export function minus(a: Ratio, b: Ratio): Value<'ratio'>
export function minus(a: Fraction, b: Fraction): Value<'fraction'>
export function minus(a: Angle, b: Angle): Value<'angle'>
export function minus(a: Relative, b: Relative): Value<'relative'>
export function minus(a: Expr<'duration'>, b: Expr<'duration'>): Value<'duration'>
export function minus<const A extends Num, const B extends Num>(a: A & IfInt<A>, b: B & IfInt<B>): Value<'int'>
export function minus(a: Num, b: Num): Value<'int' | 'float'>
export function minus(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function minus(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
export function minus(a: AnyNum, b: AnyNum): Value<'int' | 'float' | 'decimal'>
export function minus(a: Expr<'datetime'>, b: Expr<'datetime'>): Value<'duration'>
export function minus(a: Expr<'datetime'>, b: Expr<'duration'>): Value<'datetime'>
export function minus(a: TypstValue, b: TypstValue): Expr<string> {
  return expr({ k: 'binop', op: '-', l: toCode(a), r: toCode(b) })
}

/** `a / b`: a length, an angle, a ratio or a number divided by a number, or by a value of its kind (a float). */
export function div<A, B>(a: A & IfUnknown<A, B>, b: B & IfUnknown<A, B>): Value<any>
/** A quotient of ints is a float. */
export function div(a: Num, b: Num): Value<'float'>
export function div(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function div(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
export function div(a: AnyNum, b: AnyNum): Value<'float' | 'decimal'>
export function div<T extends Scalable>(a: Expr<T>, b: number | Expr<'int' | 'float'>): Value<T>
export function div(a: Length, b: Length): Value<'float'>
export function div(a: Ratio, b: Ratio): Value<'float'>
export function div(a: Fraction, b: Fraction): Value<'float'>
export function div(a: Angle, b: Angle): Value<'float'>
export function div(a: Expr<'duration'>, b: Expr<'duration'>): Value<'float'>
export function div(a: TypstValue, b: TypstValue): Expr<string> {
  return expr({ k: 'binop', op: '/', l: toCode(a), r: toCode(b) })
}

/** `-x`: a number, a length or another value of a kind that has a sign, negated. */
export function neg<T extends Arithmetic>(a: Expr<T>): Value<T>
export function neg(a: number): Value<'int' | 'float'>
export function neg(a: TypstValue): Expr<string> {
  return expr({ k: 'neg', v: toCode(a) })
}

/** A repetition count: an int (a `number` is checked when called). */
type Count = number | Expr<'int'>

/** `x * n` and `n * x`: a length, a number or similar scaled; an array, a string or content repeated. Prints in the order given. */
export function times<A, B>(a: A & IfUnknown<A, B>, b: B & IfUnknown<A, B>): Value<any>
export function times<const A extends Num, const B extends Num>(a: A & IfInt<A>, b: B & IfInt<B>): Value<'int'>
export function times(a: Num, b: Num): Value<'int' | 'float'>
export function times(a: Expr<'decimal'>, b: Expr<'decimal' | 'int'> | number): Value<'decimal'>
export function times(a: Expr<'int'> | number, b: Expr<'decimal'>): Value<'decimal'>
export function times(a: AnyNum, b: AnyNum): Value<'int' | 'float' | 'decimal'>
/** Ratios multiply with ratios, and scale lengths, fractions and angles. */
export function times(a: Expr<'ratio'>, b: Expr<'ratio'>): Value<'ratio'>
export function times<T extends 'length' | 'relative' | 'fraction' | 'angle'>(a: Expr<T>, b: Expr<'ratio'>): Value<T>
export function times<T extends 'length' | 'relative' | 'fraction' | 'angle'>(a: Expr<'ratio'>, b: Expr<T>): Value<T>
export function times<T extends Scalable>(a: Expr<T>, n: number | Expr<'int' | 'float'>): Value<T>
export function times<T extends Scalable>(n: number | Expr<'int' | 'float'>, a: Expr<T>): Value<T>
/** Repetition takes an int (`2.5 * "a"` is an error). */
export function times(a: readonly TypstValue[] | Expr<'array'>, n: Count): Value<'array'>
export function times(n: Count, a: readonly TypstValue[] | Expr<'array'>): Value<'array'>
export function times(a: string | Expr<'str'>, n: Count): Value<'str'>
export function times(n: Count, a: string | Expr<'str'>): Value<'str'>
export function times(a: Inline | Block | Expr<'content'>, n: Count): Value<'content'>
export function times(n: Count, a: Inline | Block | Expr<'content'>): Value<'content'>
export function times(a: TypstValue, b: TypstValue): Value<string> {
  // A computed count (`cols.length`) is typed `number`: a fraction would repeat nothing Typst accepts.
  const repeated = (v: unknown) => typeof v === 'string' || Array.isArray(v) || isMarkup(v)
  for (const [n, x] of [
    [a, b],
    [b, a],
  ])
    if (typeof n === 'number' && repeated(x) && !Number.isInteger(n))
      throw new RangeError(`a repetition count is an int, got ${n}`)
  return expr({ k: 'binop', op: '*', l: toCode(a), r: toCode(b) }) as Value<string>
}

/**
 * A file path, for `image`, `read`, `json` and the other functions that load files. Only a literal
 * compiles, so that a string from data does not become a file by mistake; for a path the program
 * computes, use `unsafePath`. A path resolves from the file where it is made, also when it goes to
 * a template's function.
 */
export function path<const P extends string>(p: Literal<P>): Expr<'path'> {
  if (typeof p !== 'string') throw new TypeError('path takes a string literal')
  return call('path', [{ k: 'str', v: p }])
}

/**
 * `read(path)`: the contents of a file, as text, or as bytes with `{ encoding: null }`.
 * Written by hand because the result type depends on the encoding.
 */
export function read(path: Expr<'path'>): Value<'str'>
export function read(options: { readonly encoding: 'utf8' }, path: Expr<'path'>): Value<'str'>
export function read(options: { readonly encoding: null }, path: Expr<'path'>): Value<'bytes'>
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
  return expr({
    k: 'call',
    callee: { k: 'ident', name: 'read', std: true },
    args: [{ name: null, value: nodeOf(path) }, ...named],
    trailing: null,
  })
}
Object.defineProperty(read, RT, { value: { path: 'read', pos: [], named: {} } })

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
/**
 * JSON-like data checked by its shape, so that an object typed by an `interface` (which has no index
 * signature) passes as well as one typed by a type alias.
 */
type DataShape<V> = V extends
  string | number | bigint | boolean | null | undefined | Expr<string> | TypstType | Inline | Block
  ? V
  : V extends Date | RegExp | Map<unknown, unknown> | Set<unknown> | Promise<unknown> | Stmt
    ? never
    : V extends (...args: never[]) => unknown
      ? V
      : V extends readonly unknown[]
        ? // No undefined in an array: it would be a hole.
          { readonly [K in keyof V]: undefined extends V[K] ? never : DataShape<V[K]> }
        : V extends object
          ? { readonly [K in keyof V]: DataShape<V[K]> }
          : never

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
 * A file path that the program computes (`assets/${hash}.png`), where `path('…')` takes only
 * literals: the way for a JavaScript string to choose which file the document reads. Use it only
 * with paths the program builds, never with input from users, and grep for `unsafePath` to audit
 * every use. An expression (`unsafePath(external('logo'))`) prints as it is.
 */
export function unsafePath(p: string | Expr<string>): Expr<'path'> {
  if (typeof p === 'string') return call('path', [{ k: 'str', v: p }])
  if (isExpr(p)) return expr(nodeOf(p)) as Expr<'path'>
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
 * key). Keys print as identifiers when they can, else as strings. Only its own keys: a plain
 * object inside it is a plain object (`{ firstName }` prints `first-name`); nest `dict(…)` there too.
 */
export function dict<V extends object>(
  v: V & { readonly [K in keyof V]: TypstValue | DataShape<V[K]> | undefined },
): Value<'dictionary'> {
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
/** An object typed by an `interface` (no index signature), checked by its shape. */
export function data<const V extends readonly unknown[]>(v: V & DataShape<V>): Value<'array'>
export function data<const V extends object>(v: V & DataShape<V>): Value<'dictionary'>
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
  if (isExpr(v)) return nodeOf(v)
  if (isMarkup(v)) return toContentCode(v)
  // A function or a type of the standard library (`heading`, `color.hsv`), or a closure, prints as code;
  // a spread fails there (it goes only into variadic arguments).
  if (typeof v === 'function' || typeof v === 'bigint' || (typeof v === 'object' && (RT in v || SPREAD in v)))
    return toCode(v)
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
