/** Set and show rules, let bindings, context, imports. */
import {
  type Arg,
  type Block,
  type Inline,
  type Code,
  type Content,
  type ContentArg,
  type Expr,
  type Label,
  type Stmt,
  type StmtNode,
  type TypstFn,
  type TypstValue,
  CtxToken,
  type DEFINED_FN,
  EXPR_PROTO,
  NODE,
  expr,
  isExpr,
  isPlainObject,
  isParamNode,
  isReaderValue,
  isSpread,
  SPREAD,
  isMarkup,
  isStmt,
  nodeOf,
  stmtOf,
  type Literal,
  markFile,
} from './core.ts'
import { toCode, toContentCode, toClosure } from './convert.ts'
import {
  type Ctx,
  type Exact,
  type AnyFunc,
  type FuncRt,
  type Sig,
  type SigOf,
  type Value,
  calleeOf,
  convertParam,
  isFileArg,
  namedArgs,
  rtOf,
  RT,
} from './element.ts'
import { assertIdent, assertKeyName, kebab } from './escape.ts'
import { TYPST_VERSION } from './gen/std.ts'

/**
 * Throws unless the document can bind `name`. A name of the standard library
 * can be bound (`#let title = …`): the printer then writes the library's
 * definition as `std.title`. Only `std` itself cannot, as it is the way back.
 */
export function assertFreeName(name: string): string {
  assertIdent(name)
  if (name === 'std') throw new TypeError('"std" cannot be bound: it is how the document reaches the standard library')
  return name
}

export type { Literal } from './core.ts'

// ---------------------------------------------------------------------------
// set

/**
 * `#set text(size: 10pt)`. Only the fields that a set rule accepts compile.
 * With `{ if: cond }`, `#set … if cond`: the rule applies only when a
 * condition that only Typst knows holds (for one known in TypeScript, use `&&`).
 */
export function set<F extends AnyFunc, const O extends SigOf<F>['set']>(
  element: F,
  fields: O & Exact<O, SigOf<F>['set']>,
  options?: { readonly if: Expr<'bool'> },
): Stmt {
  const rt = rtOf(element)
  const { positional, named } = splitPositional(rt, fields as Record<string, unknown>)
  const args = [...positional, ...namedArgs(rt, named, new Set(rt.set))]
  if (options && !isExpr(options.if)) throw new TypeError('set: the condition is an expression of type bool')
  return stmtOf({ k: 'set', target: calleeOf(rt), args, ...(options ? { cond: nodeOf(options.if) } : {}) })
}

/** Positional settable fields go first, without a name. */
function splitPositional(
  rt: FuncRt,
  fields: Record<string, unknown>,
): { positional: Arg[]; named: Record<string, unknown> } {
  const named = { ...fields }
  const positional: Arg[] = []
  for (const p of rt.pos) {
    if (!rt.setPos?.includes(p.name)) continue
    const key = Object.keys(named).find((k) => kebab(k) === p.name)
    if (key === undefined) continue
    if (named[key] !== undefined) positional.push({ name: null, value: convertParam(named[key], p) })
    delete named[key]
  }
  return { positional, named }
}

// ---------------------------------------------------------------------------
// show

export declare const SEL: unique symbol
/** A selector that remembers which element it matches. */
export interface Selector<S extends Sig> extends Expr<'selector'> {
  readonly [SEL]: S
}

/** `heading.where(level: 1)`. */
export function where<F extends AnyFunc, const O extends Partial<SigOf<F>['fieldsIn']>>(
  element: F,
  fields: O & Exact<O, SigOf<F>['fieldsIn']>,
): Selector<SigOf<F>> {
  const rt = rtOf(element)
  const args = []
  for (const [key, value] of Object.entries(fields as Record<string, unknown>)) {
    const field = rt.fields?.[key]
    if (!field) throw new TypeError(`${rt.path} has no field ${JSON.stringify(key)}`)
    if (value !== undefined)
      args.push({ name: field, value: toCode(value, rt.named[key] ?? rt.pos.find((p) => p.name === field)) })
  }
  const method: Code = { k: 'field', target: calleeOf(rt), name: 'where' }
  const sel = expr({ k: 'call', callee: method, args, trailing: null })
  return Object.freeze(Object.assign(Object.create(null), sel, { [RT]: rt })) as Selector<SigOf<F>>
}

/** The element in a show rule: content, plus its fields. */
export type ElemRef<S extends Sig> = Value<'content'> & { readonly [K in keyof S['fieldsOut']]: S['fieldsOut'][K] }

/** A show function runs in context, so it also gets the context token. */
type Replacement<It> =
  Stmt | ContentArg | Expr<string> | AnyFunc | { readonly [DEFINED_FN]: true } | ((it: It, ctx: Ctx) => TypstValue)

/** `#show heading: it => …`, `#show heading.where(level: 1): set text(…)`, `#show: rest => …`. */
export function show<F extends AnyFunc>(selector: F, replacement: Replacement<ElemRef<SigOf<F>>>): Stmt
export function show<S extends Sig>(selector: Selector<S>, replacement: Replacement<ElemRef<S>>): Stmt
export function show(
  selector: Label | string | Expr<'selector' | 'regex' | 'label' | 'symbol'>,
  replacement: Replacement<Content>,
): Stmt
export function show(replacement: Replacement<Content>): Stmt
export function show(...args: unknown[]): Stmt {
  const [selector, replacement] = args.length === 1 ? [undefined, args[0]] : args
  let sel: Code | null = null
  let fields: Readonly<Record<string, string>> | undefined
  if (typeof selector === 'function' && RT in selector) {
    const rt = rtOf(selector as never)
    sel = calleeOf(rt)
    fields = rt.fields
  } else if (selector !== undefined) {
    // Typst rejects an empty text selector, which would fail the whole compilation.
    if (selector === '') throw new TypeError('show: a text selector is not empty')
    sel = toCode(selector, { sel: true })
    if (typeof selector === 'object' && selector !== null && RT in selector) fields = rtOf(selector as never).fields
  }
  let repl: Code | StmtNode
  if (isStmt(replacement)) {
    if (replacement.stmt.k !== 'set') throw new TypeError('only a set rule can be a show rule replacement')
    repl = replacement.stmt
  } else if (typeof replacement === 'function' && RT in replacement) {
    // A function value (`show figure.caption: emph`).
    repl = toCode(replacement)
  } else if (typeof replacement === 'function') {
    repl = toClosure(replacement as (...a: never[]) => unknown, ['it'], (name) => elemRef(name, fields), [
      new CtxToken(),
    ])
  } else {
    repl = toContentCode(replacement)
  }
  return stmtOf({ k: 'show', selector: sel, replacement: repl })
}

function elemRef(name: string, fields: Readonly<Record<string, string>> | undefined): unknown {
  const target: Code = { k: 'ident', name }
  const ref = expr(target) as object
  // On the prototype of expressions: the element is content, with the methods of content (`it.func()`).
  const out = Object.create(EXPR_PROTO) as Record<string | symbol, unknown>
  for (const key of Object.getOwnPropertySymbols(ref)) out[key] = (ref as Record<symbol, unknown>)[key]
  for (const [key, field] of Object.entries(fields ?? {})) {
    Object.defineProperty(out, key, { get: () => expr({ k: 'field', target, name: field }), enumerable: true })
  }
  // A field the element does not have is a mistake, not `undefined` content that disappears.
  return new Proxy(Object.freeze(out), {
    get(t, key) {
      if (typeof key === 'string' && fields && !(key in t)) {
        throw new TypeError(
          `this element has no field ${JSON.stringify(key)} known to the bindings; ` +
            `for a field Typst computes, use unsafeRaw.code({ el: it })\`el.${key}\``,
        )
      }
      return Reflect.get(t, key)
    },
  })
}

// ---------------------------------------------------------------------------
// let, context, import

/**
 * A number literal prints as an int when it is a safe integer, and as a float
 * otherwise (`numberLiteral`); a number known only at run time can be either.
 */
type NumberOf<V extends number> = number extends V
  ? Expr<'int' | 'float'>
  : `${V}` extends `${string}.${string}` | `${string}e${string}` | 'Infinity' | '-Infinity' | 'NaN'
    ? Value<'float'>
    : Length<`${V}`> extends 16 | 17 | 18 | 19 | 20 | 21 | 22
      ? Expr<'int' | 'float'>
      : Value<'int'>
type Length<S extends string, N extends unknown[] = []> = S extends `${string}${infer R}`
  ? Length<R, [...N, 0]>
  : N['length']

/** A reference to a binding: the type of its value, with the methods of that type. */
type ExprOf<V> =
  V extends Expr<infer T>
    ? Value<T>
    : V extends string
      ? Value<'str'>
      : V extends number
        ? NumberOf<V>
        : V extends bigint
          ? Value<'int'>
          : V extends boolean
            ? Value<'bool'>
            : V extends Inline | Block | readonly (Inline | Block | string)[]
              ? Value<'content'>
              : V extends readonly unknown[]
                ? Value<'array'>
                : V extends null
                  ? Expr<'none'>
                  : V extends object
                    ? Value<'dictionary'>
                    : Value<'content'>

/** The names of a destructuring `let`: literals, or `null` for a place left out (`_`). */
type Names<Ns extends readonly (string | null)[]> = {
  readonly [K in keyof Ns]: Ns[K] extends string ? Literal<Ns[K]> : null
}

/** `#let name = value`. Returns the statement and a reference to the binding. */
export function let_<const N extends string, V extends TypstValue | ContentArg>(
  name: Literal<N>,
  value: V,
): [Stmt, ExprOf<V>]
/**
 * `#let (a, b, _) = value`: the items of an array, or the values of a dictionary by key (what a
 * template's `documentclass(…)` returns). Returns the statement and a reference per name, of a type
 * only Typst knows (`Expr<any>`); `null` leaves a place out.
 */
export function let_<const Ns extends readonly (string | null)[]>(
  names: Names<Ns>,
  value: TypstValue,
): [Stmt, { [K in keyof Ns]: Expr<any> }]
export function let_(name: unknown, value: unknown): [Stmt, unknown] {
  if (Array.isArray(name)) {
    const names = (name as unknown[]).map((n) => (n === null ? null : assertFreeName(n as string)))
    if (!names.some((n) => n !== null)) throw new TypeError('a destructuring let binds at least one name')
    const bound = names.filter((n) => n !== null)
    if (new Set(bound).size !== bound.length) throw new TypeError('a destructuring let binds each name once')
    return [
      stmtOf({ k: 'let-pattern', names, value: toCode(value) }),
      names.map((n) => (n === null ? null : expr({ k: 'ident', name: n }))),
    ]
  }
  if (typeof name !== 'string') throw new TypeError('let_ takes a name, or an array of names')
  const n = assertFreeName(name)
  // Markup is content; arrays and dictionaries are values.
  const code = isMarkup(value) ? toContentCode(value) : toCode(value)
  const ref = expr({ k: 'ident', name: n })
  // A binding of a file (`let_('logo', path('logo.png'))`) is a file too.
  const file = isFileArg(value) && value !== null
  return [
    stmtOf({ k: 'let', name: n, params: null, value: code, ...(file ? { file: true as const } : {}) }),
    file ? markFile(ref) : ref,
  ]
}

/**
 * `f(…)`: a call of a function that only Typst knows, a binding (`let_('fmt', (x) => …)`), a name a
 * template brings (`external('cover')`) or a result (`f.with(…)`). Named arguments go first, as
 * one object (camelCase keys are kebab-case); then the positional ones, content or values. Like any
 * value whose type only Typst knows, the result is `Expr<any>`. Generated and `define` functions are
 * called directly; this is for the rest.
 */
export function call(fn: Expr<string>, ...args: unknown[]): Expr<any> {
  if (!isExpr(fn)) throw new TypeError('call takes a function value (an expression)')
  assertCallee(fn)
  const rest = [...args]
  const out: Arg[] = []
  if (isPlainObject(rest[0])) {
    const seen = new Set<string>()
    for (const [key, value] of Object.entries(rest.shift() as Record<string, unknown>)) {
      if (value === undefined) continue
      const name = assertKeyName(kebab(key))
      if (seen.has(name)) throw new TypeError(`call: two arguments are both ${JSON.stringify(name)} in Typst`)
      seen.add(name)
      out.push({ name, value: isMarkup(value) ? toContentCode(value) : toCode(value) })
    }
  }
  for (const value of rest) {
    if (value === undefined) throw new TypeError('call: a positional argument is undefined')
    out.push(
      isSpread(value)
        ? { name: null, value: value[SPREAD], spread: true }
        : { name: null, value: isMarkup(value) || Array.isArray(value) ? toContentCode(value) : toCode(value) },
    )
  }
  return expr({ k: 'call', callee: nodeOf(fn), args: out, trailing: null })
}

/**
 * What `call` may call: a name (a binding, a parameter, an `external`) or a field of one (`m.f`). A
 * function value computed in Typst (`f.with(…)`, `it.func()`, a field of a parameter such as `it.kind`)
 * could be one that reads files (`csv.with()`, `image`), which would then read the file data names.
 */
function assertCallee(fn: Expr<string>): void {
  let node = nodeOf(fn)
  const field = node.k === 'field'
  while (node.k === 'field') node = node.target
  const why =
    isReaderValue(fn) || node.k !== 'ident'
      ? 'a function value computed in Typst (a .with(…), a func(), a call)'
      : field && isParamNode(node)
        ? 'a field of a parameter (a value only Typst knows, such as it.kind)'
        : null
  if (why)
    throw new TypeError(
      `call: the function is ${why}, which could be one that reads files; call a name (let_, external, a parameter)`,
    )
}

/** `context …`: the callback gets the token that contextual functions require. */
export function context(body: (ctx: Ctx) => ContentArg | Expr<string>): Content {
  const result = body(new CtxToken() as unknown as Ctx)
  const code = isExpr(result) ? nodeOf(result) : toContentCode(result)
  return expr({ k: 'context', body: code })
}

/** What marks an `Importable`: only the library makes one, so data never names a module. */
export const IMPORTABLE: unique symbol = Symbol('typst.importable')

/**
 * Something that an import can bring into scope: a `define`, a declared function or an
 * `external` value. Only the library makes one: a `{ name }` object is none.
 */
export interface Importable {
  readonly name: string
  readonly [IMPORTABLE]: true
}

/** Throws unless `v` is an `Importable` the library made; returns its name. */
export function importableName(v: Importable): string {
  if (typeof v !== 'object' && typeof v !== 'function') throw new TypeError('expected an external(…) or a define(…)')
  if (v === null || !(IMPORTABLE in v))
    throw new TypeError('expected an external(…) or a define(…), not a plain object')
  return assertIdent(v.name)
}

/** An item imported under another name: `{ item: 'generate-link', as: orcidLink }` is `generate-link as orcid-link`. */
export interface Renamed {
  readonly item: string
  readonly as: Importable
}

/**
 * A value that the document does not bind itself: one that an import brings
 * into scope, or one defined in a file that includes this one. With `from`,
 * a member of an imported module (`apa.title-page`). Like any value whose
 * type only Typst knows, it is `Expr<any>`; `assume<T>()` narrows it.
 */
/**
 * Standard functions that run code or read files (`eval`, `image`, `json`, `pdf.attach`…). A name the
 * document does not bind is the standard library's: as `external('eval')` or
 * `define('image')….external()`, it would make the library call them with any value, past the checks
 * of their bindings (`eval` is left out of them, `image` takes only files). Such a name must be one
 * the document imports (a package's `cite`): the printer throws otherwise. test/security.test.ts
 * checks that the list has every function with a file parameter.
 */
export const STD_READERS: ReadonlySet<string> = new Set([
  'bibliography',
  'cbor',
  'cite',
  'csv',
  'eval',
  'image',
  'json',
  'pdf',
  'plugin',
  'raw',
  'read',
  'toml',
  'xml',
  'yaml',
])

/** A reference to a name the document does not bind itself: one of `STD_READERS` must be imported (see printer.ts). */
export function unboundIdent(name: string): Code {
  return STD_READERS.has(name) ? { k: 'ident', name, reader: true, ext: true } : { k: 'ident', name, ext: true }
}

export function external<const N extends string>(name: Literal<N>, from?: Importable): Expr<any> & Importable {
  const n = from ? assertIdent(name) : assertFreeName(name)
  const node: Code = from
    ? { k: 'field', target: { k: 'ident', name: importableName(from) }, name: n }
    : unboundIdent(n)
  return Object.freeze(
    Object.create(EXPR_PROTO, {
      [NODE]: { value: node, enumerable: true },
      name: { value: n },
      [IMPORTABLE]: { value: true },
    }),
  ) as Expr<any> & Importable
}

function importItems(items: readonly (Importable | Renamed)[]): (string | { name: string; as: string })[] {
  return items.map((i) =>
    'item' in i && !(IMPORTABLE in i)
      ? { name: assertIdent(i.item), as: assertFreeName(importableName(i.as)) }
      : assertFreeName(importableName(i as Importable)),
  )
}

/**
 * `#import "@preview/pkg:1.0.0": a, b as c`, or, with a module in place of
 * the list, `#import "@preview/pkg:1.0.0" as m` (its members: `external('x', m)`,
 * `define('f')….external(m)`).
 */
export function importPackage<const P extends `@${string}/${string}:${number}.${number}.${number}`>(
  spec: Literal<P>,
  items: readonly (Importable | Renamed)[] | Importable,
): Stmt {
  if (typeof spec !== 'string' || !/^@[a-z0-9-]+\/[a-z0-9-]+:\d+\.\d+\.\d+$/.test(spec))
    throw new TypeError(`not a package spec: ${spec}`)
  return importStmt(spec, items)
}

/** `#import "file.typ": a, b as c`, or `#import "file.typ" as m`. */
export function importFile<const P extends string>(
  path: Literal<P>,
  items: readonly (Importable | Renamed)[] | Importable,
): Stmt {
  if (typeof path !== 'string') throw new TypeError('importFile takes a string literal')
  return importStmt(path, items)
}

function importStmt(source: string, items: readonly (Importable | Renamed)[] | Importable): Stmt {
  if (!Array.isArray(items))
    return stmtOf({ k: 'import', source, items: [], module: assertFreeName(importableName(items as Importable)) })
  // `import "lib/std.typ"` would bind the module under a name of its file (`std`), which the library does
  // not see: one that hides a name it prints.
  if (!items.length)
    throw new TypeError("an import lists what it brings, or names its module: importFile(…, external('lib'))")
  return stmtOf({ k: 'import', source, items: importItems(items as readonly (Importable | Renamed)[]) })
}

/** `#include "file.typ"`: the content of another file of the project. */
export function includeFile<const P extends string>(path: Literal<P>): Expr<'content'> {
  if (typeof path !== 'string') throw new TypeError('includeFile takes a string literal')
  return expr({ k: 'include', source: path })
}

/** `#assert(sys.version == version(…))`: the document fails to compile with another Typst version. */
export function versionGuard(): Stmt {
  const [major, minor, patch] = TYPST_VERSION.split('.')
  const lit = (v: string): Code => ({ k: 'lit', v })
  const cond: Code = {
    k: 'binop',
    op: '==',
    l: { k: 'field', target: { k: 'ident', name: 'sys', std: true }, name: 'version' },
    r: {
      k: 'call',
      callee: { k: 'ident', name: 'version', std: true },
      args: [major!, minor!, patch!].map((v) => ({ name: null, value: lit(v) })),
      trailing: null,
    },
  }
  const message: Code = { k: 'str', v: `this document was generated for Typst ${TYPST_VERSION}` }
  return stmtOf({
    k: 'expr',
    code: {
      k: 'call',
      callee: { k: 'ident', name: 'assert', std: true },
      args: [
        { name: null, value: cond },
        { name: 'message', value: message },
      ],
      trailing: null,
    },
  })
}

/**
 * A code block, `{ set text(red); body }`: rules that apply to the rest of
 * the block, then the value the block evaluates to.
 */
export function codeBlock<V extends Expr<string> | string | number | boolean | ContentArg>(
  rules: readonly Stmt[],
  value: V,
): ExprOf<V>
/**
 * `{ let x = …; f(x); [text] }`: statements and expressions in order. As in
 * Typst, the block's value joins the values of its expressions.
 */
export function codeBlock(items: readonly (Stmt | Expr<string> | ContentArg | TypstFn)[]): Value<any>
export function codeBlock(
  items: readonly (Stmt | Expr<string> | ContentArg | TypstFn)[],
  value?: unknown,
): Expr<string> {
  const code = (v: unknown) => (isExpr(v) || typeof v !== 'object' || v === null ? toCode(v) : toContentCode(v))
  const stmts: StmtNode[] = items.map((item) => (isStmt(item) ? item.stmt : { k: 'expr', code: code(item) }))
  return expr({ k: 'block', stmts, value: value === undefined ? null : code(value) })
}
