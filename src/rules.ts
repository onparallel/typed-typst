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
  isSpread,
  SPREAD,
  isMarkup,
  isStmt,
  nodeOf,
  stmtOf,
  type Digits,
  type Literal,
  type TypstType,
} from './core.ts'
import { toMarkup, isContentArray, toCode, toContentCode, toClosure } from './convert.ts'
import {
  type Ctx,
  type Exact,
  type AnyFunc,
  type AnyElement,
  type FuncRt,
  type Sig,
  type SigOf,
  type Value,
  type MethodsOf,
  calleeOf,
  convertParam,
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
  // `it2`, `it3`… name the parameter of a nested callback (`it` stays free, see SECURITY.md).
  if (/^_[0-9]/.test(name) || /^it[0-9]+$/.test(name))
    throw new TypeError(
      `${JSON.stringify(name)} cannot be bound: names like _1 and it2 are the parameters the library gives callbacks`,
    )
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
export function set<F extends AnyElement, const O extends SigOf<F>['set']>(
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
/** A selector of an element's instances, with the methods of selectors (`.or(figure)`). */
export interface Selector<S extends Sig> extends Value<'selector'> {
  readonly [SEL]: S
}

/** `heading.where(level: 1)`. */
export function where<F extends AnyElement, const O extends Partial<SigOf<F>['fieldsIn']>>(
  element: F,
  fields: O & Exact<O, SigOf<F>['fieldsIn']>,
): Selector<SigOf<F>> {
  const rt = rtOf(element)
  const args = []
  for (const [key, value] of Object.entries(fields as Record<string, unknown>)) {
    const field = rt.fields?.[key]
    if (!field) throw new TypeError(`${rt.path} has no field ${JSON.stringify(key)}`)
    if (value === undefined) continue
    const p = rt.named[key] ?? rt.pos.find((q) => q.name === field)
    // Typst compares a field of content with content as it was built (a text, a sequence…), which data
    // cannot know: such a field is no part of `where` (types say so too). `unsafeRaw` can still write one.
    if (p?.c || p?.sc)
      throw new TypeError(`${rt.path}.where: ${key} is content, which where does not compare (use unsafeRaw)`)
    const code = toCode(value, p)
    args.push({ name: field, value: code })
  }
  const method: Code = { k: 'field', target: calleeOf(rt), name: 'where' }
  const sel = expr({ k: 'call', callee: method, args, trailing: null })
  // On the prototype of expressions, for the methods of selectors; the table for `set`, `show` and `where`.
  const out = Object.create(EXPR_PROTO) as Record<symbol, unknown>
  for (const key of Object.getOwnPropertySymbols(sel)) out[key] = (sel as unknown as Record<symbol, unknown>)[key]
  out[RT] = rt
  return Object.freeze(out) as unknown as Selector<SigOf<F>>
}

/** The element in a show rule: content, plus its fields. */
export type ElemRef<S extends Sig> = Value<'content'> & {
  readonly [K in keyof S['fieldsOut']]: S['fieldsOut'][K]
} & (S['type'] extends string ? MethodsOf<S['type']> : {})

/** A show function runs in context, so it also gets the context token. */
type Replacement<It> =
  | Stmt
  | ContentArg
  | Expr<string>
  | AnyFunc
  | { readonly [DEFINED_FN]: true }
  // Content may hold statements (`it => [set(text, { fill: blue }), underline(it)]`).
  | ((it: It, ctx: Ctx) => TypstValue | ContentArg)

/** `#show heading: it => …`, `#show heading.where(level: 1): set text(…)`, `#show: rest => …`. */
export function show<F extends AnyElement>(selector: F, replacement: Replacement<ElemRef<SigOf<F>>>): Stmt
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
    sel = toCode(selector)
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
    repl = toClosure(
      replacement as (...a: never[]) => unknown,
      ['it'],
      (name) => elemRef(name, fields),
      [new CtxToken()],
      true,
    )
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
    : Digits<`${V}`> extends 16 | 17 | 18 | 19 | 20 | 21 | 22
      ? Expr<'int' | 'float'>
      : Value<'int'>

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
            : V extends Inline | Block | Stmt | readonly (Inline | Block | Stmt | string)[]
              ? Value<'content'>
              : V extends readonly unknown[]
                ? Value<'array'>
                : V extends null
                  ? Expr<'none'>
                  : V extends TypstType
                    ? Value<'type'>
                    : V extends ((...args: never[]) => unknown) | { readonly [DEFINED_FN]: true }
                      ? Value<'function'>
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
  // Markup, and an array of strings and markup, is content; other arrays and dictionaries are values.
  // `undefined` is empty content, as where content goes (`let_('note', maybe)`).
  const code = value === undefined || isMarkup(value) || isContentArray(value) ? toContentCode(value) : toCode(value)
  return [stmtOf({ k: 'let', name: n, params: null, value: code }), expr({ k: 'ident', name: n })]
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
  // A field that holds a function is called in parentheses: `it.kind(x)` would be a method call. A
  // member of a module (`external('f', mod)`) is called as it is.
  const callee = nodeOf(fn)
  const group = callee.k === 'field' && !(IMPORTABLE in fn)
  return expr({ k: 'call', callee: group ? { k: 'group', v: callee } : callee, args: out, trailing: null })
}

/** `context …`: the callback gets the token that contextual functions require. */
export function context(body: (ctx: Ctx) => ContentArg | Expr<string>): Content {
  const result = body(new CtxToken() as unknown as Ctx)
  const code = isExpr(result) ? nodeOf(result) : toContentCode(result)
  return expr({ k: 'context', body: code }) as Content
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
 * `eval` runs a string as code and `plugin` loads WebAssembly: they are left out of the bindings, and a
 * name the document does not bind is the standard library's, so `external('eval')` would bring them
 * back. A package's function of that name goes through a module (`external('eval', pkg)`).
 */
const LEFT_OUT = new Set(['eval', 'plugin'])

/** A name the document does not bind itself; never `eval` or `plugin` (see `LEFT_OUT`). */
export function unboundIdent(name: string): Code {
  if (LEFT_OUT.has(name))
    throw new TypeError(`${name} is left out of the library: it would run data as code or load WebAssembly`)
  return { k: 'ident', name }
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
  if (typeof spec !== 'string' || !/^@[A-Za-z_][\w-]*\/[A-Za-z_][\w-]*:\d+\.\d+\.\d+$/.test(spec))
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
export function includeFile<const P extends string>(path: Literal<P>): Content {
  if (typeof path !== 'string') throw new TypeError('includeFile takes a string literal')
  return expr({ k: 'include', source: path }) as Content
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
  // Items and value are typed as `let_` types a value: markup and an array of strings and markup are
  // content, other arrays are arrays (`{ (33,); … }`); a number is a value, as in Typst.
  const valueCode = (v: unknown) => (v === undefined || isMarkup(v) || isContentArray(v) ? toContentCode(v) : toCode(v))
  const stmts: StmtNode[] = items.map((x) => (isStmt(x) ? x.stmt : { k: 'expr', code: valueCode(x) }))
  return expr({ k: 'block', stmts, value: value === undefined ? null : valueCode(value) })
}
