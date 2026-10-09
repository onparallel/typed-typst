/**
 * Runtime for the generated standard library bindings.
 *
 * Generated code is mostly data: one `Sig` type and one `FuncRt` table per
 * function. This module turns a call into a node.
 */
import {
  type Arg,
  type DEFINED_NAMED,
  type Code,
  type Content,
  type Expr,
  CtxToken,
  EXPR_PROTO,
  expr,
  isExpr,
  isFileValue,
  isReaderValue,
  markReader,
  markFile,
  isMarkup,
  isPlainObject,
  isSpread,
  NAMES,
  NODE,
  nodeOf,
  type OneOf,
  type TypstType,
  RT,
  SPREAD,
} from './core.ts'

export { RT }
import { ownItems, type ParamRt, pathCode, toCode, toContentCode } from './convert.ts'
import { assertIdent, assertKeyName, kebab } from './escape.ts'
import type { TypeMethods } from './gen/std.ts'

export declare const SIG: unique symbol
export declare const CTX: unique symbol

/** Proof of a context. Only `context(ctx => …)` creates one. */
export interface Ctx {
  readonly [CTX]: true
}

/** Type-level description of a generated function. */
export interface Sig {
  /** Named arguments, by TS name. */
  readonly named: object
  /** Positional arguments, as a tuple. */
  readonly pos: readonly unknown[]
  /** Positional arguments in the order of the signature, all optional (for `with`). */
  readonly withPos: readonly unknown[]
  /** The Typst type the call returns. */
  readonly ret: string
  /** Fields that a set rule accepts. */
  readonly set: object
  /** Fields that `where` accepts, as inputs. */
  readonly fieldsIn: object
  /** Fields that `it.…` gives in a show rule. */
  readonly fieldsOut: object
  /** Contextual functions take a `Ctx` first. */
  readonly ctx: boolean
}

/** Runtime description of a generated function. */
export interface FuncRt {
  readonly path: string
  /** Alternative positional signatures, by parameter name; the one with as many parameters as arguments is used. */
  readonly variants?: readonly (readonly string[])[]
  /** `opt`: optional, but before a required one; left out when arguments are missing. */
  readonly pos: readonly (ParamRt & { readonly name: string; readonly opt?: true })[]
  readonly rest?: ParamRt & { readonly name: string }
  readonly named: Readonly<Record<string, ParamRt>>
  /** TS name → Typst name of the element's fields. */
  readonly fields?: Readonly<Record<string, string>>
  /** TS names of the arguments that a set rule accepts. */
  readonly set?: readonly string[]
  /** Typst names of the positional fields that a set rule accepts (`#set align(center)`). */
  readonly setPos?: readonly string[]
  readonly ctx?: true
  /** The argument sink takes named arguments of any name (`arguments(a: 2)`). */
  readonly openNamed?: true
  /** The function returns bytes. */
  readonly bytes?: true
  /** A positional parameter takes a file: as a value, the function would read what Typst passes it. */
  readonly reads?: true
}

/** Rejects computed keys (an index signature) and keys that `N` does not have. */
export type Exact<O, N> = string extends keyof O ? never : { [K in keyof O]: K extends keyof N ? O[K] : never }

export type Call<S extends Sig, R> = S['ctx'] extends true
  ? {
      (ctx: Ctx, ...pos: S['pos']): R
      <const O extends S['named']>(ctx: Ctx, named: O & Exact<O, S['named']>, ...pos: S['pos']): R
    }
  : {
      (...pos: S['pos']): R
      <const O extends S['named']>(named: O & Exact<O, S['named']>, ...pos: S['pos']): R
    }

/** Whether `T` is a union of several types. */
type IsUnion<T, U = T> = T extends unknown ? ([U] extends [T] ? false : true) : never

/**
 * The methods of a value of Typst type `T`: those of its type when `T` is one
 * known type. A value whose type only Typst knows (`any`) or that can be of
 * several types has none; `assume<T>()` states which one it is.
 */
export type MethodsOf<T extends string> = 0 extends 1 & T
  ? {}
  : IsUnion<T> extends true
    ? {}
    : T extends keyof TypeMethods
      ? Methods<TypeMethods[T]>
      : {}

/** An expression that results from the API: an `Expr<T>` with the methods of its type (`c.update(2)`). */
export type Value<T extends string> = Expr<T> & MethodsOf<T>

export type Func<S extends Sig> = Call<S, Value<S['ret']>> & {
  readonly [SIG]: S
  readonly [RT]: FuncRt
  /** `f.with(…)`: the function with some arguments already applied, named ones and the first positional ones. */
  readonly with: {
    (...pos: Prefix<S['withPos']>): Expr<'function'>
    <const O extends S['named']>(named: O & Exact<O, S['named']>, ...pos: Prefix<S['withPos']>): Expr<'function'>
  }
}

/** The first positional arguments of a signature, any number of them (`columns.with(2)`). */
export type Prefix<T extends readonly unknown[]> = T extends readonly []
  ? []
  : number extends T['length']
    ? // Only variadic arguments are left (`..items`): any number of them.
      T
    : T extends readonly [infer H, ...infer R]
      ? [] | [Exclude<H, undefined>, ...Prefix<R>]
      : T extends readonly [(infer H)?, ...infer R]
        ? [] | [Exclude<H, undefined>, ...Prefix<R>]
        : T

/** A method's signature: the function's, without its `self` parameter. */
export type DropSelf<S extends Sig> = Omit<S, 'pos'> & {
  readonly pos: S['pos'] extends infer P
    ? P extends readonly [unknown, ...infer R]
      ? R
      : P extends readonly unknown[]
        ? P
        : never
    : never
}

/** Methods of a Typst type, called on a value (`v.len()`), as signatures by name. */
export type Methods<M> = {
  readonly [K in keyof M]: M[K] extends Sig ? Call<DropSelf<M[K]>, Value<M[K]['ret']>> : never
}

/** The constructor of a Typst type (`counter(…)`); its values have the type's methods. */
export type TypeCtor<S extends Sig> = Call<S, Value<S['ret']>> & {
  readonly [SIG]: S
  readonly [RT]: FuncRt
}
export type ElementFn<S extends Sig> = Func<S>
/** Any generated function, whatever its signature. */
export interface AnyFunc {
  readonly [SIG]: Sig
  readonly [RT]: FuncRt
}

/**
 * The object of named arguments that a function takes, generated or from
 * `define`: `NamedOf<typeof table.cell>['inset']`. (`Parameters<typeof f>`
 * does not work: the callers are overloaded.)
 */
export type NamedOf<F> = F extends { readonly [SIG]: infer S extends Sig }
  ? S['named']
  : F extends { readonly [DEFINED_NAMED]?: infer N }
    ? N
    : never

export type SigOf<F> = F extends { readonly [SIG]: infer S extends Sig } ? S : never

/** The Typst path of a function as a code node (`table.cell`). */
export function calleeOf(rt: FuncRt): Code {
  return pathCode(rt.path)
}

/** The string of `path('…')` or `unsafePath(…)`, as written: `"a.png"` for `path("a.png")`. */
function pathLiteral(v: unknown): Code | null {
  if (!isExpr(v)) return null
  const n = v[NODE] as Code
  if (n.k !== 'call' || n.callee.k !== 'ident' || n.callee.name !== 'path' || !n.callee.std) return null
  const [arg] = n.args
  return n.args.length === 1 && arg!.name === null && arg!.value.k === 'str' ? arg!.value : null
}

/**
 * Why `value` cannot go where Typst reads a file, or null when it can: a file is `path('…')` or
 * `unsafePath(…)`, bytes a function made, a name the parameter takes, `none` or `auto`, or an array
 * of those. A string, or any other value computed in Typst, could be one data chose.
 */
function notAFile(value: unknown, names: readonly string[]): string | null {
  if (value === null) return null
  if (typeof value === 'string')
    return names.includes(value) ? null : `${JSON.stringify(value)} is a string, and a string is never read as a file`
  if (Array.isArray(value)) {
    for (const item of value) {
      const why = notAFile(item, names)
      if (why) return why
    }
    return null
  }
  if (isExpr(value)) {
    if (isFileValue(value)) return null
    const node = nodeOf(value)
    if (node.k === 'lit' && (node.v === 'auto' || node.v === 'none')) return null
    const oneOf = (value as Partial<OneOf<string>>)[NAMES]
    if (oneOf) {
      const other = oneOf.find((n) => !names.includes(n))
      return other === undefined ? null : `${JSON.stringify(other)} is no name this parameter takes`
    }
    return 'a value computed in Typst could hold any string'
  }
  return `${typeof value === 'object' ? 'this object' : typeof value} is no file`
}

/** A copy of the arrays in `value`, each item read once (a hole throws). */
function snapshot(value: unknown): unknown {
  return Array.isArray(value) ? ownItems(value).map(snapshot) : value
}

/** Whether `value` can go where Typst reads a file (see `notAFile`). */
export function isFileArg(value: unknown): boolean {
  return notAFile(value, []) === null
}

/** Throws unless `value` can go where Typst reads a file (see `notAFile`). */
export function assertFileArg(value: unknown, names: readonly string[], where: string): void {
  const why = notAFile(value, names)
  if (!why) return
  const some = names.length
    ? ` or a name it takes (${names.slice(0, 3).join(', ')}${names.length > 3 ? ', …' : ''}; from a define, a T.oneOf parameter)`
    : ''
  throw new TypeError(
    `${where}: ${why}. A file goes as path('…') with a literal path, unsafePath(…) for one the program or a ` +
      `trusted template computes, or bytes (bytes(…), read(…, { encoding: null }))${some}.`,
  )
}

/**
 * How an argument converts. `direct`: an argument of a call that runs where it is written,
 * where a path literal prints as a string (`image("a.png")`), as a person writes it and as
 * packages written before the `path` type expect when they read the field. Typst resolves
 * a string where the function that reads it runs, and a path where it was made: they differ
 * only once the value travels (a `let`, a function from a package, `.with`, a set rule).
 */
export function convertParam(value: unknown, p: ParamRt, where = 'this parameter', direct = false): Code {
  // Arrays are read once: a getter (or a Proxy) could give a checked file, then another value.
  if (p.path) value = snapshot(value)
  if (p.path) assertFileArg(value, p.path === true ? [] : p.path, where)
  if (typeof value === 'string' && p.str) assertChecked(value, p.str, where)
  if (direct && p.path) {
    const literal = pathLiteral(value)
    if (literal) return literal
    if (Array.isArray(value) && value.some(pathLiteral))
      return { k: 'array', items: value.map((x: unknown) => pathLiteral(x) ?? toCode(x)) }
  }
  // A parameter that takes content may also take a function (`supplement: it => …`).
  return p.c && typeof value !== 'function' ? toContentCode(value) : toCode(value, p)
}

const STRING_CHECKS = {
  char: [(s: string) => Array.from(s).length === 1, 'exactly one character'],
  nonempty: [(s: string) => s !== '', 'a pattern, not an empty string'],
  lang: [(s: string) => /^[\x00-\x7f]{2,3}$/.test(s), 'a language code of two or three letters (ISO 639)'],
  region: [(s: string) => /^[\x00-\x7f]{2}$/.test(s), 'a region code of two letters (ISO 3166-1)'],
} as const

/** A string that Typst would reject, rejected here, where the document is built (not its whole compilation). */
function assertChecked(value: string, check: NonNullable<ParamRt['str']>, where: string): void {
  const [ok, what] = STRING_CHECKS[check]
  if (!ok(value)) throw new TypeError(`${where}: expected ${what}, got ${JSON.stringify(value)}`)
}

/** Converts named arguments in the order of the generated table. */
export function namedArgs(
  rt: FuncRt,
  values: Record<string, unknown>,
  allowed?: ReadonlySet<string>,
  direct = false,
): Arg[] {
  for (const key of Object.keys(values)) {
    if ((!Object.hasOwn(rt.named, key) && !rt.openNamed) || (allowed && !allowed.has(key))) {
      const hint = key.includes('-')
        ? ` (names are camelCase: ${JSON.stringify(key.replace(/-(.)/g, (_, c: string) => c.toUpperCase()))})`
        : allowed && Object.hasOwn(rt.named, key)
          ? ' (a set rule takes only the settable ones)'
          : ''
      throw new TypeError(`${rt.path} has no argument ${JSON.stringify(key)} here${hint}`)
    }
  }
  const args: Arg[] = []
  if (rt.openNamed) {
    const seen = new Set(Object.entries(rt.named).map(([key, p]) => (Object.hasOwn(p, 't') ? p.t : undefined) ?? key))
    for (const [key, value] of Object.entries(values))
      if (value !== undefined && !Object.hasOwn(rt.named, key)) {
        const name = assertKeyName(kebab(key))
        if (seen.has(name)) throw new TypeError(`${rt.path}: two arguments are both ${JSON.stringify(name)} in Typst`)
        seen.add(name)
        args.push({ name, value: toCode(value) })
      }
  }
  for (const [key, p] of Object.entries(rt.named)) {
    // Own keys only: a key that a polluted `Object.prototype` holds is no argument.
    const value = Object.hasOwn(values, key) ? values[key] : undefined
    if (value !== undefined)
      args.push({
        name: (Object.hasOwn(p, 't') ? p.t : undefined) ?? key,
        value: convertParam(value, p, `${rt.path}(${key})`, direct),
      })
  }
  return args
}

function isNamedObject(rt: FuncRt, v: unknown, args = Infinity): v is Record<string, unknown> {
  if (!isPlainObject(v)) return false
  if (rt.openNamed) return true
  // A dictionary can also be a positional argument (`link((page: 1, …))`). An empty one is no
  // arguments only where there are named ones to leave out: `metadata({})` is `metadata((:))`.
  const keys = Object.keys(v)
  // Not where a required argument would be missing without it (`json.encode({})`).
  const required = rt.pos.filter((p) => !p.opt).length
  if (!keys.length) return Object.keys(rt.named).length > 0 && args - 1 >= required
  return keys.every((k) => Object.hasOwn(rt.named, k))
}

function isTrailingContent(v: unknown): boolean {
  return isMarkup(v) || (Array.isArray(v) && v.some((x) => typeof x !== 'string' && !isExpr(x)))
}

/** Builds the call node for a generated function, or for a method of `self`. */
export function callNode(rt: FuncRt, input: readonly unknown[], self?: Code): Code {
  const args = [...input]
  // A method shared by several types may take the context token for one of them (`counter.at`, not `array.at`).
  if (rt.ctx || args[0] instanceof CtxToken) args.shift()
  const named = isNamedObject(rt, args[0], args.length)
    ? namedArgs(rt, args.shift() as Record<string, unknown>, undefined, true)
    : []
  // An object where content goes is meant as named arguments: say which key is wrong.
  if (!named.length && isPlainObject(args[0]) && (rt.pos[0] ?? rt.rest)?.c) namedArgs(rt, args[0])
  while (args.length && args.at(-1) === undefined) args.pop()
  const variant = rt.variants?.find((v) => v.length === args.length)
  if (rt.variants && !variant)
    throw new TypeError(`${rt.path} takes ${rt.variants.map((v) => v.length).join(' or ')} positional arguments`)
  const params = variant ? variant.map((n) => rt.pos.find((p) => p.name === n)!) : [...rt.pos]
  for (let i = 0; i < params.length && params.length > args.length;) {
    if (params[i]!.opt) params.splice(i, 1)
    else i++
  }
  const positional: Arg[] = []
  let trailing = null
  args.forEach((value, i) => {
    const p = params[i] ?? rt.rest
    if (!p)
      throw new TypeError(
        `${rt.path} takes at most ${params.length} positional arguments (named arguments go first, as one object)`,
      )
    if (isSpread(value)) {
      if (p !== rt.rest) throw new TypeError(`${rt.path}: spread only goes where the variadic arguments go`)
      if (p.path)
        throw new TypeError(`${rt.path}(${p.name}): a spread could hold any string; pass the files one by one`)
      positional.push({ name: null, value: value[SPREAD], spread: true })
      return
    }
    if (value === undefined) throw new TypeError(`${rt.path}: missing positional argument ${p.name}`)
    // The last content argument of a fixed position prints as a trailing `[…]`.
    if (i === args.length - 1 && p.c && p !== rt.rest && isTrailingContent(value)) {
      const code = toContentCode(value)
      if (code.k === 'content') trailing = code.body
      else positional.push({ name: null, value: code })
    } else {
      positional.push({ name: null, value: convertParam(value, p, `${rt.path}(${p.name})`, true) })
    }
  })
  const callee: Code = self ? { k: 'field', target: self, name: rt.path.split('.').at(-1)! } : calleeOf(rt)
  return { k: 'call', callee, args: [...named, ...positional], trailing }
}

/**
 * A copy of a table without prototypes, frozen: its optional flags (`ctx`, `rest`, `c`, `path`, `fn`…)
 * are only its own, never keys of a polluted `Object.prototype` (which drop or retype arguments).
 */
function bare<T>(v: T): T {
  if (typeof v !== 'object' || v === null) return v
  if (Array.isArray(v)) return Object.freeze(v.map(bare)) as T
  const out = Object.create(null) as Record<string, unknown>
  for (const [k, x] of Object.entries(v)) out[k] = bare(x)
  return Object.freeze(out) as T
}

/** A call's result: bytes a function makes may go where a file goes (`image(bytes(…))`). */
function made<E extends object>(rt: FuncRt, e: E): E {
  return Object.hasOwn(rt, 'bytes') && rt.bytes ? markFile(e) : e
}

/** Creates a generated function from its table. */
export function func<S extends Sig>(table: FuncRt): Func<S> {
  const rt = bare(table)
  const f = (...args: unknown[]) => made(rt, expr(callNode(rt, args)))
  Object.defineProperty(f, RT, { value: rt })
  Object.defineProperty(f, 'name', { value: rt.path })
  Object.defineProperty(f, 'with', {
    value: (...input: unknown[]) => {
      const args = [...input]
      const named = isNamedObject(rt, args[0]) ? namedArgs(rt, args.shift() as Record<string, unknown>) : []
      // Positional arguments fill the parameters in order, from the first: optional ones are not skipped.
      const positional = args.map((value, i) => {
        const p = rt.pos[i] ?? rt.rest
        if (!p) throw new TypeError(`${rt.path} takes at most ${rt.pos.length} positional arguments`)
        if (isSpread(value)) {
          // A spread fills any parameter, by position or by name: none of them may read a file.
          if ([...rt.pos, ...(rt.rest ? [rt.rest] : []), ...Object.values(rt.named)].some((q) => q.path))
            throw new TypeError(`${rt.path}.with: a spread could fill a parameter that reads a file`)
          return { name: null, value: value[SPREAD], spread: true as const }
        }
        return { name: null, value: convertParam(value, p, `${rt.path}(${p.name})`) }
      })
      const e = expr({
        k: 'call',
        callee: { k: 'field', target: calleeOf(rt), name: 'with' },
        args: [...named, ...positional],
        trailing: null,
      })
      // Still a function that reads a file it is given (`json.with()`): no value Typst may call.
      return leavesFileOut(rt.pos, rt.rest, args.length) ? markReader(e) : e
    },
  })
  return f as unknown as Func<S>
}

/**
 * Whether a function with these positional parameters, given `given` positional arguments (by `.with`),
 * still takes a file by position: as a value, Typst would pass it one it computes.
 */
export function leavesFileOut(pos: readonly ParamRt[], rest: ParamRt | undefined, given: number): boolean {
  return pos.some((p, i) => p.path && i >= given) || !!rest?.path
}

/** Creates a type constructor (`counter(…)`); its results have the type's methods, as every value does. */
export function typeCtor<S extends Sig>(table: FuncRt): TypeCtor<S> {
  const rt = bare(table)
  const f = (...args: unknown[]) => made(rt, expr(callNode(rt, args)))
  Object.defineProperty(f, RT, { value: rt })
  Object.defineProperty(f, 'name', { value: rt.path })
  return f as unknown as TypeCtor<S>
}

/**
 * Puts the methods of every type on the prototype of expressions, by name.
 * Typst picks the method from the type of the value, so a name prints the
 * same for every type; only the conversion of arguments comes from the table.
 * Methods of several types with one name must convert their arguments alike.
 */
export function installMethods(tables: Readonly<Record<string, Readonly<Record<string, { readonly [RT]: FuncRt }>>>>) {
  const byName = new Map<string, FuncRt[]>()
  for (const table of Object.values(tables))
    for (const [name, m] of Object.entries(table)) byName.set(name, [...(byName.get(name) ?? []), rtOf(m)])
  for (const [name, rts] of byName) {
    const rt = bare(mergeMethods(rts))
    EXPR_PROTO[name] = function (this: Expr<string>, ...args: unknown[]) {
      const e = expr(callNode(rt, args, this[NODE]))
      // The `.with(…)` of a function that reads files reads them too.
      return name === 'with' && isReaderValue(this) ? markReader(e) : e
    }
  }
}

function mergeMethods(rts: readonly FuncRt[]): FuncRt {
  // Without `self`: the method is called on the value.
  const all = rts.map((rt) => ({ ...rt, pos: rt.pos.slice(1) }))
  if (all.length === 1) return all[0]!
  const first = all[0]!
  const same = <P extends ParamRt>(ps: readonly (P | undefined)[]): P | undefined => {
    const defined = ps.filter((p): p is P => p !== undefined)
    if (!defined.length) return undefined
    const p = defined[0]!
    if (defined.every((q) => JSON.stringify(q) === JSON.stringify(p))) return p
    // Differences in how numbers print are harmless (`int` for one type); content, paths and closures are not.
    for (const q of defined)
      if (
        q.c !== p.c ||
        JSON.stringify(q.path) !== JSON.stringify(p.path) ||
        JSON.stringify(q.fn) !== JSON.stringify(p.fn)
      )
        throw new Error(`methods ${first.path.split('.').at(-1)} convert their arguments differently`)
    return { ...p, n: undefined }
  }
  if (all.some((rt) => rt.variants)) throw new Error(`method ${first.path} has variants in one type`)
  const length = Math.max(...all.map((rt) => rt.pos.length))
  const named: Record<string, ParamRt> = {}
  for (const key of new Set(all.flatMap((rt) => Object.keys(rt.named))))
    named[key] = same(all.map((rt) => rt.named[key]))!
  const rest = same(all.map((rt) => rt.rest))
  return {
    path: first.path,
    pos: Array.from({ length }, (_, i) => {
      const p = same(all.map((rt) => rt.pos[i]))!
      // A parameter that only some types take is optional.
      return all.every((rt) => rt.pos[i] && !rt.pos[i].opt) ? p : { ...p, opt: true as const }
    }),
    ...(rest ? { rest: rest as ParamRt & { name: string } } : {}),
    named,
  }
}

/** A value of the standard library by its path (`color.map.rainbow`). */
export function pathValue<T extends string>(path: string): Value<T> {
  return expr(pathCode(path)) as Value<T>
}

/** A type without a constructor or a module, with its definitions; as a value it prints as its path (`function`). */
export function named<M extends object>(path: string, members: M): Readonly<M> {
  return Object.freeze(Object.defineProperty(members, RT, { value: { path, pos: [], named: {} } }))
}

/** Attaches scoped definitions (`table.cell`) to a function. */
/** A type of the standard library is also a value of type `type` (`csv({ rowType: dictionary }, …)`). */
export function typeValue<V>(v: V): V & TypstType {
  return v as V & TypstType
}

export function scoped<F, M extends object>(f: F, members: M): F & Readonly<M> {
  return Object.freeze(Object.assign(f as object, members)) as F & Readonly<M>
}

export function rtOf(f: { readonly [RT]: FuncRt }): FuncRt {
  const rt = f[RT]
  if (!rt) throw new TypeError('not a generated Typst function')
  return rt
}

export type { Content }
