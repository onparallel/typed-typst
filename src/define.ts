/**
 * Functions that the document defines itself: `#let f(a, b: x) = …` with a
 * typed TypeScript caller.
 */
import {
  type Code,
  type Content,
  type ContentArg,
  type Auto,
  type DEFINED_FN,
  type DEFINED_NAMED,
  type Expr,
  type OneOf,
  NAMES,
  isExpr,
  nodeOf,
  type Param,
  type Stmt,
  type TypstValue,
  type Inline,
  type Block,
  type Skip,
  type Arg,
  isSpread,
  SPREAD,
  expr,
  isPlainObject,
  stmtOf,
  RT,
} from './core.ts'
import { type ParamRt, toCode, toContentCode, toMarkup } from './convert.ts'
import { assertFileArg, type Exact, type Value } from './element.ts'
import { assertFreeName, unboundIdent, IMPORTABLE, type Importable, importableName, type Literal } from './rules.ts'
import { assertIdent, assertKeyName, kebab } from './escape.ts'

export declare const SPEC: unique symbol
/** The type of a parameter: what callers pass (`I`) and what the body sees (`E`). */
export interface TSpec<I, E> {
  readonly [SPEC]?: [I, E]
  readonly rt: ParamRt
}

const spec = <I, E>(rt: ParamRt = {}): TSpec<I, E> => ({ rt })

/** Parameter types for `define`. */
/**
 * Content for a function the document defines: a Typst string is no content there (Typst converts it
 * only for its own elements), so a `str` expression goes through `inline(…)`; a JS string is `[…]`.
 */
export type DefineContent =
  | string
  | number
  | Inline
  | Block
  | Stmt
  | Expr<'content' | 'none' | 'any'>
  | Skip
  | readonly (DefineContent | Expr<string>)[]

export const T = {
  content: spec<DefineContent, Content>({ c: true }),
  str: spec<string | Expr<'str'>, Value<'str'>>(),
  int: spec<number | Expr<'int'>, Value<'int'>>({ n: 'int' }),
  float: spec<number | Expr<'int' | 'float'>, Value<'float'>>({ n: 'float' }),
  bool: spec<boolean | Expr<'bool'>, Value<'bool'>>(),
  length: spec<Expr<'length'>, Value<'length'>>(),
  relative: spec<Expr<'length' | 'ratio' | 'relative'>, Value<'relative'>>(),
  color: spec<Expr<'color'>, Value<'color'>>(),
  label: spec<Expr<'label'>, Value<'label'>>(),
  /** A file: callers pass `path('…')` (or bytes), and the body may pass it on where Typst reads a file. */
  path: spec<Expr<'path'> | Expr<'bytes'>, Value<'path'>>({ path: true }),
  /** Bytes, which may go where Typst reads a file (`image(bytes)`). */
  bytes: spec<Expr<'bytes'>, Value<'bytes'>>({ path: true }),
  /** Any value. The body sees a dynamic expression (`Expr<any>`), as in Typst. */
  any: spec<TypstValue, Expr<any>>(),
  /**
   * One of some names: callers pass one of them (checked in the types and at run time), and the body
   * may pass it on where Typst takes one of those names, also where Typst would read another string
   * as a file (`bibliography(style: …)`), which takes no plain string.
   */
  oneOf: <const N extends string>(...names: [N, ...N[]]): TSpec<N | OneOf<N>, OneOf<N>> => ({ rt: { oneOf: names } }),
  /** Also accepts `auto` (`T.orAuto(T.length)`: a length or `auto`). */
  orAuto: <I, E>(t: TSpec<I, E>): TSpec<I | Auto, E | Expr<'auto'>> => ({ rt: { ...t.rt, orAuto: true } }),
  /** Also accepts `none` (`null`). */
  nullable: <I, E>(t: TSpec<I, E>): TSpec<I | null, E | Expr<'none'>> => ({ rt: { ...t.rt, orNone: true } }),
}

interface ParamDef {
  /** The name in Typst, as declared (`paper-size`). */
  name: string
  /** The name in TypeScript: camelCase, as for the standard library (`paperSize`). */
  key: string
  kind: 'pos' | 'named' | 'rest'
  rt: ParamRt
  default?: Code
}

/** A Typst name as a TypeScript key: `paper-size` is `paperSize`, as for the standard library. */
export type Camel<S extends string> = S extends `${infer A}-${infer B}` ? `${A}${Capitalize<Camel<B>>}` : S
const camel = (s: string): string =>
  s
    .split('-')
    .map((part, i) => (i ? part.charAt(0).toUpperCase() + part.slice(1) : part))
    .join('')

/** The positional arguments `.with` takes: the first ones, any number of them (`Partial`, not a recursive prefix type). */
type WithPos<Pos extends unknown[], Rest> = [Rest] extends [never] ? Partial<Pos> : [...Partial<Pos>, ...Rest[]]

/** With `..rest`, an object first takes any key: the extra ones go into the sink, as in Typst. */
type CallNamed<Named, Rest> = [Rest] extends [never]
  ? Named
  : Named & { readonly [key: string]: TypstValue | undefined }

type Caller<Pos extends unknown[], Named, Rest, R> = {
  (...args: [...Pos, ...Rest[]]): R
  <const O extends CallNamed<Named, Rest>>(named: O & Exact<O, CallNamed<Named, Rest>>, ...args: [...Pos, ...Rest[]]): R
  /** A function value too (`s.update(double)`). */
  readonly [DEFINED_FN]: true
  /** The named parameters, for `NamedOf<typeof f>`. */
  readonly [DEFINED_NAMED]?: Named
  /**
   * `f.with(…)`: the function with some arguments already applied, named ones first as one object,
   * then the first positional ones (`show: template.with(title: …)`, `theme.with(config, aspect: …)`).
   */
  readonly with: {
    (...pos: WithPos<Pos, Rest>): Value<'function'>
    <const O extends CallNamed<Named, Rest>>(
      named: O & Exact<O, CallNamed<Named, Rest>>,
      ...pos: WithPos<Pos, Rest>
    ): Value<'function'>
  }
}

/** A function defined by the document. `decl` is its `#let`; calling it prints a call. */
export type Defined<Pos extends unknown[], Named, Rest, R> = Caller<Pos, Named, Rest, R> &
  Importable & {
    readonly decl: Stmt
  }

/** A function whose `#let` lives in a `.typ` file; bring it in with `importFile`. */
export type Declared<Pos extends unknown[], Named, Rest, R> = Caller<Pos, Named, Rest, R> & Importable

class Builder<Pos extends unknown[], Named, Refs, Rest, R extends string> {
  readonly #name: string
  readonly #params: readonly ParamDef[]
  /** `.returns(…)` named a type: the body is a value, not content. */
  readonly #value: boolean
  /** `.returns(T.nullable(T.content))`: `null` is `none`, not empty content. */
  readonly #nullable: boolean
  constructor(name: string, params: readonly ParamDef[], value = false, nullable = false) {
    this.#name = name
    this.#params = params
    this.#value = value
    this.#nullable = nullable
  }

  #add(def: ParamDef): never {
    if (this.#params.some((p) => p.name === def.name)) throw new TypeError(`duplicate parameter ${def.name}`)
    if (def.kind === 'pos' && this.#params.some((p) => p.kind === 'rest'))
      throw new TypeError('a positional parameter cannot follow ..rest')
    if (def.kind === 'rest' && this.#params.some((p) => p.kind === 'rest'))
      throw new TypeError('only one ..rest parameter')
    return new Builder(this.#name, [...this.#params, def], this.#value, this.#nullable) as never
  }

  /** A required positional parameter. Order of calls is the order of parameters. */
  pos<const P extends string, I, E>(
    name: Literal<P>,
    t: TSpec<I, E>,
  ): Builder<[...Pos, I], Named, Refs & Record<Camel<P>, E>, Rest, R> {
    return this.#add({ name: assertIdent(name), key: camel(name), kind: 'pos', rt: t.rt })
  }

  /** An optional named parameter with a default value. */
  named<const P extends string, I, E>(
    name: Literal<P>,
    t: TSpec<I, E>,
    fallback: I,
  ): Builder<Pos, Named & { readonly [K in Camel<P>]?: I | undefined }, Refs & Record<Camel<P>, E>, Rest, R> {
    return this.#add({
      name: assertIdent(name),
      key: camel(name),
      kind: 'named',
      rt: t.rt,
      default: convert(fallback, t.rt),
    })
  }

  /** A variadic `..name` parameter. The body sees an `arguments` value. */
  rest<const P extends string, I, E>(
    name: Literal<P>,
    t: TSpec<I, E>,
  ): Builder<Pos, Named, Refs & Record<Camel<P>, Value<'arguments'>>, I, R> {
    return this.#add({ name: assertIdent(name), key: camel(name), kind: 'rest', rt: t.rt })
  }

  /** The Typst type of the result, when it is not content. */
  returns<R2 extends string>(t: TSpec<unknown, Expr<R2>>): Builder<Pos, Named, Refs, Rest, R2> {
    return new Builder(this.#name, this.#params, !t.rt.c, t.rt.c === true && t.rt.orNone === true) as never
  }

  /** The function body, built from references to the parameters. */
  body(
    // Without `.returns(…)` the result is content: a dictionary or a function would be typed wrong.
    fn: (
      params: Refs,
    ) => string extends R ? TypstValue : [R] extends ['content'] ? DefineContent : ContentArg | Expr<R> | TypstValue,
  ): Defined<Pos, Named, [Rest] extends [never] ? never : Rest, Value<R>> {
    // In the body, a parameter that shadowed a standard name would hide it.
    for (const p of this.#params) assertFreeName(p.name)
    const refs = Object.fromEntries(
      this.#params.map((p) => {
        const ref = expr({ k: 'ident', name: p.name })
        // A `T.oneOf` parameter carries its names, which `convertParam` checks where it goes.
        return [p.key, p.rt.oneOf ? Object.freeze(Object.create(ref, { [NAMES]: { value: p.rt.oneOf } })) : ref]
      }),
    )
    const result = fn(refs as Refs)
    // With `.returns(…)` of a type, the body is a value (`2`, an array); otherwise it is content
    // (markup, strings, parts), as the function's type says.
    if (!this.#value && (typeof result === 'function' || isPlainObject(result)))
      throw new TypeError(
        `${this.#name}: a body that returns a ${typeof result === 'function' ? 'function' : 'dictionary'} needs .returns(T.any): without it, the result is content`,
      )
    // Content, as typed: a string is `[…]` and `null` is `[]`, so that the result has content's methods
    // (`"…"` and `none` would not).
    const value: Code = this.#value
      ? toCode(result)
      : result === null && this.#nullable
        ? { k: 'lit', v: 'none' }
        : typeof result === 'string' || result === null
          ? { k: 'content', body: toMarkup(result) }
          : convert(result, { c: true })
    const params: Param[] = this.#params.map((p) =>
      p.kind === 'rest'
        ? { name: p.name, rest: true }
        : // Own field only: a `default` of a polluted `Object.prototype` is no default value (it would print as code).
          p.kind === 'named' && Object.hasOwn(p, 'default') && p.default
          ? { name: p.name, default: p.default }
          : { name: p.name },
    )
    const decl = stmtOf({ k: 'let', name: this.#name, params, value })
    return Object.assign(this.#caller(), { decl }) as never
  }

  /** No body: the function is defined in a `.typ` file or a package; with `from`, a member of an imported module. */
  external(from?: Importable): Declared<Pos, Named, [Rest] extends [never] ? never : Rest, Value<R>> {
    return this.#caller(from && importableName(from), true) as never
  }

  #caller(module?: string, external = false): object {
    const name = this.#name
    // `f(…)`, or `m.f(…)` for a member of a module.
    const path = module ? `${module}.${name}` : name
    const callee: Code = module
      ? { k: 'field', target: { k: 'ident', name: module }, name }
      : external
        ? unboundIdent(name)
        : { k: 'ident', name }
    const params = this.#params
    const pos = params.filter((p) => p.kind === 'pos')
    const named = new Map(params.filter((p) => p.kind === 'named').map((p) => [p.key, p]))
    const rest = params.find((p) => p.kind === 'rest')
    const namedOut = (namedArgs: Record<string, unknown>) => {
      for (const key of Object.keys(namedArgs))
        if (!named.has(key) && !rest)
          throw new TypeError(
            `${name} has no parameter ${key}${named.size ? ` (it has ${[...named.keys()].join(', ')})` : ''}`,
          )
      const declared = new Set(params.map((p) => p.name))
      const seen = new Set<string>()
      return Object.entries(namedArgs)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => {
          // A key for `..rest` is any key of the object: an ASCII name (see assertKeyName).
          const typst = named.get(key)?.name ?? assertKeyName(kebab(key))
          // An argument for `..rest` must not name a parameter (`bib-style` for `bibStyle`): Typst would
          // bind it to that parameter, past its checks (`T.oneOf`, `T.path`).
          if (!named.has(key) && declared.has(typst))
            throw new TypeError(
              `${name}: ${JSON.stringify(key)} names the parameter ${typst}; pass it as its own argument`,
            )
          if (seen.has(typst)) throw new TypeError(`${name}: two arguments are both ${JSON.stringify(typst)} in Typst`)
          seen.add(typst)
          return { name: typst as never, value: convert(value, named.get(key)?.rt ?? {}, `${name}(${key})`, !external) }
        })
    }
    // A spread goes into `..rest` (`(...nums) => f(...nums)`), as Typst's `f(..nums)`.
    const arg = (value: unknown, i: number): Arg =>
      isSpread(value) && i >= pos.length && rest
        ? { name: null, value: value[SPREAD], spread: true }
        : { name: null, value: convert(value, (pos[i] ?? rest)!.rt, undefined, !external) }
    const f = (...input: unknown[]) => {
      const args = [...input]
      const first = args[0]
      // With `..rest`, extra named arguments go into the sink, as in Typst (and its type takes any key).
      // Not where a positional argument would be missing without it: `f({ title: 'x' })` with one
      // positional passes a dictionary.
      const namedArgs =
        isPlainObject(first) && args.length - 1 >= pos.length && (rest || Object.keys(first).every((k) => named.has(k)))
          ? (args.shift() as Record<string, unknown>)
          : {}
      const namedCode = namedOut(namedArgs)
      if (args.length < pos.length || (args.length > pos.length && !rest))
        throw new TypeError(
          `${name} takes ${pos.length} positional arguments, got ${args.length} (named arguments go first, as one object)`,
        )
      const out = [...args.map((value, i) => arg(value, i)), ...namedCode]
      return expr({ k: 'call', callee, args: out, trailing: null })
    }
    Object.defineProperty(f, 'name', { value: name })
    Object.defineProperty(f, IMPORTABLE, { value: true })
    Object.defineProperty(f, 'with', {
      value: (...input: unknown[]) => {
        const args = [...input]
        const first = args[0]
        const namedArgs =
          isPlainObject(first) && (rest || Object.keys(first).every((k) => named.has(k)))
            ? (args.shift() as Record<string, unknown>)
            : {}
        if (args.length > pos.length && !rest)
          throw new TypeError(`${name}.with takes at most ${pos.length} positional arguments`)
        return expr({
          k: 'call',
          callee: { k: 'field', target: callee, name: 'with' },
          args: [...args.map((value, i) => arg(value, i)), ...namedOut(namedArgs)],
          trailing: null,
        })
      },
    })
    // As a value (`show: f`, `#f`), the function prints as its name.
    Object.defineProperty(f, RT, {
      value: {
        path,
        pos: [],
        named: {},
        user: true,
      },
    })
    return f
  }
}

/** `own`: the document defines the function, so a string for content goes as `[…]` (see below). */
function convert(value: unknown, rt: ParamRt, where = 'this parameter', own = true): Code {
  if (rt.path) assertFileArg(value, [], where)
  // `auto` and `none` pass where `T.orAuto` and `T.nullable` allow them.
  const isAuto = isExpr(value) && nodeOf(value).k === 'lit' && (nodeOf(value) as { v: string }).v === 'auto'
  const allowed = (rt.orAuto && isAuto) || (rt.orNone && value === null)
  if (rt.oneOf && !allowed) {
    const names = rt.oneOf
    const given =
      typeof value === 'string' ? [value] : isExpr(value) ? (value as Partial<OneOf<string>>)[NAMES] : undefined
    const wrong = given ? given.find((n) => !names.includes(n)) : '(not a name)'
    if (wrong !== undefined) throw new TypeError(`${where}: ${JSON.stringify(wrong)} is not one of ${names.join(', ')}`)
  }
  // A function the document defines does not convert a string to content, as an element does: a
  // string goes as `[…]` and `null` as `[]`, so that the parameter is content, as typed
  // (`T.nullable(T.content)` takes `none`). A function from a template keeps its values: what it does
  // with them is the template's.
  if (own && rt.c && (typeof value === 'string' || (value === null && !rt.orNone)))
    return { k: 'content', body: toMarkup(value) }
  return rt.c ? toContentCode(value) : toCode(value, rt)
}

/** Starts a function definition: `define('card').pos(…).named(…).body(…)`. */
export function define<const N extends string>(name: Literal<N>): Builder<[], {}, {}, never, 'content'> {
  return new Builder(assertFreeName(name), [])
}
