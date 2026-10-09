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
  expr,
  isPlainObject,
  stmtOf,
  RT,
  markFile,
  markParam,
  markReader,
} from './core.ts'
import { type ParamRt, toCode, toContentCode } from './convert.ts'
import { assertFileArg, type Exact, leavesFileOut, type Value } from './element.ts'
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
export const T = {
  content: spec<ContentArg, Content>({ c: true }),
  str: spec<string | Expr<'str'>, Expr<'str'>>(),
  int: spec<number | Expr<'int'>, Expr<'int'>>({ n: 'int' }),
  float: spec<number | Expr<'int' | 'float'>, Expr<'float'>>({ n: 'float' }),
  bool: spec<boolean | Expr<'bool'>, Expr<'bool'>>(),
  length: spec<Expr<'length'>, Expr<'length'>>(),
  relative: spec<Expr<'length' | 'ratio' | 'relative'>, Expr<'relative'>>(),
  color: spec<Expr<'color'>, Expr<'color'>>(),
  label: spec<Expr<'label'>, Expr<'label'>>(),
  /** A file: callers pass `path('…')` (or bytes), and the body may pass it on where Typst reads a file. */
  path: spec<Expr<'path'> | Expr<'bytes'>, Expr<'path'>>({ path: true }),
  /** Bytes, which may go where Typst reads a file (`image(bytes)`). */
  bytes: spec<Expr<'bytes'>, Expr<'bytes'>>({ path: true }),
  /** Any value. The body sees a dynamic expression (`Expr<any>`), as in Typst. */
  any: spec<TypstValue, Expr<any>>(),
  /**
   * One of some names: callers pass one of them (checked in the types and at
   * runtime), and the body may pass it on where Typst takes one of those names,
   * also where any other string would be a file (`bibliography(style: …)`).
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

type Caller<Pos extends unknown[], Named, Rest, R> = {
  (...args: [...Pos, ...Rest[]]): R
  <const O extends Named>(named: O & Exact<O, Named>, ...args: [...Pos, ...Rest[]]): R
  /** A function value too (`s.update(double)`). */
  readonly [DEFINED_FN]: true
  /** The named parameters, for `NamedOf<typeof f>`. */
  readonly [DEFINED_NAMED]?: Named
  /**
   * `f.with(…)`: the function with some arguments already applied, named ones first as one object,
   * then the first positional ones (`show: template.with(title: …)`, `theme.with(config, aspect: …)`).
   */
  readonly with: {
    (...pos: WithPos<Pos, Rest>): Expr<'function'>
    <const O extends Named>(named: O & Exact<O, Named>, ...pos: WithPos<Pos, Rest>): Expr<'function'>
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
  constructor(name: string, params: readonly ParamDef[]) {
    this.#name = name
    this.#params = params
  }

  #add(def: ParamDef): never {
    if (this.#params.some((p) => p.name === def.name)) throw new TypeError(`duplicate parameter ${def.name}`)
    if (def.kind === 'pos' && this.#params.some((p) => p.kind === 'rest'))
      throw new TypeError('a positional parameter cannot follow ..rest')
    if (def.kind === 'rest' && this.#params.some((p) => p.kind === 'rest'))
      throw new TypeError('only one ..rest parameter')
    return new Builder(this.#name, [...this.#params, def]) as never
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
  ): Builder<Pos, Named & { readonly [K in Camel<P>]?: I }, Refs & Record<Camel<P>, E>, Rest, R> {
    return this.#add({
      name: assertIdent(name),
      key: camel(name),
      kind: 'named',
      rt: t.rt,
      // The default is part of the definition, written with it: like the body, it may be a function that
      // reads files (`logo: image`), which only the body calls.
      default: convert(fallback, { ...t.rt, sel: true }),
    })
  }

  /** A variadic `..name` parameter. The body sees an `arguments` value. */
  rest<const P extends string, I, E>(
    name: Literal<P>,
    t: TSpec<I, E>,
  ): Builder<Pos, Named, Refs & Record<Camel<P>, Expr<'arguments'>>, I, R> {
    return this.#add({ name: assertIdent(name), key: camel(name), kind: 'rest', rt: t.rt })
  }

  /** The Typst type of the result, when it is not content. */
  returns<R2 extends string>(_t: TSpec<unknown, Expr<R2>>): Builder<Pos, Named, Refs, Rest, R2> {
    return new Builder(this.#name, this.#params) as never
  }

  /** The function body, built from references to the parameters. */
  body(
    fn: (params: Refs) => ContentArg | Expr<R> | TypstValue,
  ): Defined<Pos, Named, [Rest] extends [never] ? never : Rest, Value<R>> {
    // In the body, a parameter that shadowed a standard name would hide it.
    for (const p of this.#params) assertFreeName(p.name)
    const refs = Object.fromEntries(
      this.#params.map((p) => {
        const ref = expr(markParam({ k: 'ident', name: p.name }))
        // A `T.path` parameter is a file; a `T.oneOf` one carries its names, which `convertParam`
        // checks where it goes.
        if (p.rt.path) return [p.key, markFile(ref)]
        return [p.key, p.rt.oneOf ? Object.freeze(Object.create(ref, { [NAMES]: { value: p.rt.oneOf } })) : ref]
      }),
    )
    const result = fn(refs as Refs)
    // A function or a dictionary is a value; anything else (markup, strings, parts) is content.
    const value = typeof result === 'function' || isPlainObject(result) ? toCode(result) : convert(result, { c: true })
    const params: Param[] = this.#params.map((p) => ({
      ...(p.kind === 'rest'
        ? { name: p.name, rest: true }
        : // Own field only: a `default` of a polluted `Object.prototype` is no default value (it would print as code).
          p.kind === 'named' && Object.hasOwn(p, 'default') && p.default
          ? { name: p.name, default: p.default }
          : { name: p.name }),
      ...(p.rt.path ? { file: true as const } : {}),
    }))
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
    // A positional `T.path`, `T.bytes` or `T.oneOf` parameter: as a value, Typst would pass it any string
    // it computes, past the checks of the caller (a `T.oneOf` name may go where a string is a file).
    const fileLike = (p: ParamDef | undefined) => (p && (p.rt.path || p.rt.oneOf) ? { path: true as const } : {})
    const leaves = (given: number) => leavesFileOut(pos.map(fileLike), rest && fileLike(rest), given)
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
          return { name: typst as never, value: convert(value, named.get(key)?.rt ?? {}, `${name}(${key})`) }
        })
    }
    const f = (...input: unknown[]) => {
      const args = [...input]
      const first = args[0]
      // With `..rest`, extra named arguments go into the sink, as in Typst.
      const namedArgs =
        isPlainObject(first) && (rest || (named.size && Object.keys(first).every((k) => named.has(k))))
          ? (args.shift() as Record<string, unknown>)
          : {}
      const namedCode = namedOut(namedArgs)
      if (args.length < pos.length || (args.length > pos.length && !rest))
        throw new TypeError(
          `${name} takes ${pos.length} positional arguments, got ${args.length} (named arguments go first, as one object)`,
        )
      const out = [
        ...args.map((value, i) => ({ name: null, value: convert(value, (pos[i] ?? rest)!.rt) })),
        ...namedCode,
      ]
      return expr({ k: 'call', callee, args: out, trailing: null })
    }
    Object.defineProperty(f, 'name', { value: name })
    Object.defineProperty(f, IMPORTABLE, { value: true })
    Object.defineProperty(f, 'with', {
      value: (...input: unknown[]) => {
        const args = [...input]
        const namedArgs = isPlainObject(args[0]) ? (args.shift() as Record<string, unknown>) : {}
        if (args.length > pos.length && !rest)
          throw new TypeError(`${name}.with takes at most ${pos.length} positional arguments`)
        const e = expr({
          k: 'call',
          callee: { k: 'field', target: callee, name: 'with' },
          args: [
            ...args.map((value, i) => ({ name: null, value: convert(value, (pos[i] ?? rest)!.rt) })),
            ...namedOut(namedArgs),
          ],
          trailing: null,
        })
        return leaves(args.length) ? markReader(e) : e
      },
    })
    // As a value (`show: f`, `#f`), the function prints as its name.
    Object.defineProperty(f, RT, {
      value: {
        path,
        pos: [],
        named: {},
        user: true,
        ...(callee.k === 'ident' && callee.reader ? { reader: true } : {}),
        ...(leaves(0) ? { reads: true } : {}),
      },
    })
    return f
  }
}

function convert(value: unknown, rt: ParamRt, where = 'this parameter'): Code {
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
  // A function that reads files goes to no parameter as a value (`logo: image`): the body, or the
  // template that gets it, could call it with any string.
  return rt.c ? toContentCode(value) : toCode(value, rt)
}

/** Starts a function definition: `define('card').pos(…).named(…).body(…)`. */
export function define<const N extends string>(name: Literal<N>): Builder<[], {}, {}, never, 'content'> {
  return new Builder(assertFreeName(name), [])
}
