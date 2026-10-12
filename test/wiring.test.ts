/**
 * The bindings take arguments the way Typst does. Every generated function is called with a value of
 * each type Typst reflects for each parameter, every settable parameter goes through a set rule, and
 * every field through `where`; each document is compiled. Values Typst rejects for what they are
 * (an invalid numbering pattern, a missing label) are fine here: what must never happen is an
 * argument Typst does not expect, a missing one, a field it does not have, or a call that throws.
 */
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import * as lib from '../src/index.ts'
import { isExpr, RT } from '../src/core.ts'
import { typstCompile } from './helpers/typst.ts'

const L = lib as unknown as Record<string, any>
type Cast = { kind: string; type?: string; value?: unknown; of?: Cast[] }
type Param = { name: string; input: Cast; required: boolean; variadic: boolean; settable: boolean }
const spec = JSON.parse(readFileSync(new URL('../spec/typst-0.15.1.json', import.meta.url), 'utf8')) as {
  functions: { path: string; element: boolean; contextual: boolean | null; params: Param[] }[]
}
const flat = (c: Cast): Cast[] => (c.kind === 'union' ? c.of!.flatMap(flat) : [c])
const camel = (s: string) => s.replace(/-(.)/g, (_, c: string) => c.toUpperCase())
function resolve(path: string): any {
  const [head, ...rest] = path.split('.')
  let o = L[camel(head!)] ?? L[`${camel(head!)}_`]
  for (const s of rest) if (s !== 'constructor') o = o?.[camel(s)]
  return o
}
const samples: Record<string, () => unknown> = {
  alignment: () => L.left,
  angle: () => L.deg(10),
  arguments: () => L.arguments_(1),
  array: () => L.data([]),
  auto: () => L.auto,
  bool: () => true,
  bytes: () => L.bytes('a'),
  color: () => L.red,
  content: () => L.strong('x'),
  counter: () => L.counter('c'),
  datetime: () => L.datetime({ year: 2020, month: 1, day: 1 }),
  decimal: () => L.decimal('1'),
  dictionary: () => L.data({}),
  direction: () => L.ltr,
  duration: () => L.duration({ days: 1 }),
  float: () => 1.5,
  fraction: () => L.fr(1),
  gradient: () => L.gradient.linear(L.red, L.blue),
  int: () => 1,
  label: () => L.label('k'),
  length: () => L.pt(1),
  none: () => null,
  ratio: () => L.pct(50),
  regex: () => L.regex('a'),
  relative: () => L.add(L.pt(1), L.pct(1)),
  selector: () => L.heading,
  state: () => L.state('s'),
  str: () => 'x',
  stroke: () => L.stroke({ thickness: L.pt(1) }),
  symbol: () => L.sym.arrow,
  type: () => L.int,
  version: () => L.version(1),
}
const SKIP = Symbol('skip')
/** A value of a cast; a function is a closure that returns true (`filter`), or an element (`self` of `where`). */
const sample = (c: Cast, param?: string): unknown =>
  c.type === 'function'
    ? param === 'self'
      ? L.heading
      : () => true
    : c.kind === 'any'
      ? 1
      : c.kind === 'value'
        ? c.type === 'str'
          ? c.value
          : SKIP
        : c.type && samples[c.type]
          ? samples[c.type]!()
          : SKIP
// Functions that read files (they need real ones), and the hand-written ones (values.ts).
const SKIPPED = /^(eval|image|json|csv|cbor|xml|yaml|toml|bibliography|read|plugin|pdf\.attach|label|path|rgb|luma)\b/
/** What says that the bindings pass arguments or fields differently from Typst. */
const WIRING =
  /unexpected argument|missing argument|element `[^`]+` does not have field|cannot be set|missing positional argument|can only be used when context is known/
/** Calls that fail by their value, not their wiring: Typst asks for more than the type says. */
const KNOWN: Readonly<Record<string, string>> = {
  'link.dest = label': 'a label or location destination needs a body; a URL does not',
  'math.binom (base)': '..lower takes one value at least',
  'math.binom.upper = content': '..lower takes one value at least',
  'numbering.numbering = function': 'without numbers, Typst calls the closure with none',
  'function.where.fields = undefined': '..fields takes named arguments only (a test value goes positionally here)',
}

/** Compiles the documents eight at a time; returns the failures that `bad` accepts. */
async function compileAll(
  docs: [string, () => unknown][],
  bad: (id: string, message: string) => boolean,
): Promise<string[]> {
  const failures: string[] = []
  let next = 0
  await Promise.all(
    Array.from({ length: 8 }, async () => {
      while (next < docs.length) {
        const [id, build] = docs[next++]!
        let message: string | null = null
        try {
          await typstCompile(lib.render(build() as never), 'pdf', undefined, true)
        } catch (e) {
          message = String((e as { stderr?: string }).stderr || (e as Error).message)
            .split('\n')
            .find((l) => l.startsWith('error') || !l.startsWith('Command'))!
        }
        if (message && bad(id, message)) failures.push(`${id}: ${message}`)
      }
    }),
  )
  return failures.sort()
}

describe('bindings', () => {
  it('pass every parameter as Typst takes it', { timeout: 600_000 }, async () => {
    const docs: [string, () => unknown][] = []
    for (const f of spec.functions) {
      if (SKIPPED.test(f.path)) continue
      const fn = resolve(f.path)
      const rt = fn?.[RT]
      expect(rt?.pos, f.path).toBeDefined()
      const method = rt.pos[0]?.name === 'self'
      const required = new Set<string>(
        rt.pos
          .filter((p: { opt?: true }) => !p.opt)
          .slice(0, (rt.required ?? 0) + (method ? 1 : 0))
          .map((p: { name: string }) => p.name),
      )
      const base: Record<string, unknown> = {}
      for (const p of f.params) {
        if (!required.has(p.name)) continue
        const v = flat(p.input)
          .map((c) => sample(c, p.name))
          .find((x) => x !== SKIP)
        if (v !== undefined || flat(p.input).some((c) => c.type === 'none')) base[p.name] = v ?? null
      }
      // A required parameter of a type without a sample (`spot`, `location`): nothing to call.
      if ([...required].some((n) => !(n in base))) continue
      // `asMethod`: on the value, `x.f(…)`, which goes through the methods merged across types.
      const call =
        (over: Record<string, unknown>, asMethod = false, positionally = false) =>
        () => {
          // A parameter that is both positional and named goes by name, to test the name (and once
          // positionally too, below).
          const byName = new Set(
            Object.keys(over).filter(
              (k) =>
                !positionally && Object.values(rt.named).some((n: any, i) => (n.t ?? Object.keys(rt.named)[i]) === k),
            ),
          )
          const vals = Object.fromEntries(Object.entries({ ...base, ...over }).filter(([k]) => !byName.has(k)))
          const namedVals = Object.fromEntries(Object.entries(over).filter(([k]) => byName.has(k)))
          const posNames: string[] = rt.variants
            ? (rt.variants.find((v: string[]) => Object.keys(vals).every((k) => v.includes(k) || k in rt.named)) ??
              rt.variants[0])
            : rt.pos.map((p: { name: string }) => p.name)
          const last = posNames.reduce((m, n, i) => (n in vals ? i : m), -1)
          const pos: unknown[] = []
          for (const n of posNames.slice(0, last + 1)) {
            if (n in vals) pos.push(vals[n])
            else if (!rt.pos.find((p: { name: string; opt?: true }) => p.name === n)?.opt) pos.push(undefined)
          }
          if (rt.rest && rt.rest.name in vals) pos.push(vals[rt.rest.name])
          const named: Record<string, unknown> = {}
          for (const [k, v] of Object.entries({ ...vals, ...namedVals })) {
            if (posNames.includes(k) || rt.rest?.name === k) continue
            const key = Object.keys(rt.named).find((n) => (rt.named[n].t ?? n) === k)
            if (key) named[key] = v
            else if (rt.openNamed) named[k] = v
          }
          if (asMethod) {
            const self = isExpr(pos[0]) ? pos[0] : lib.data(pos[0] as never)
            const m = (self as unknown as Record<string, (...a: unknown[]) => unknown>)[
              camel(f.path.split('.').at(-1)!)
            ]!
            const rest = Object.keys(named).length ? [named, ...pos.slice(1)] : pos.slice(1)
            return f.contextual
              ? lib.doc(lib.context((ctx) => lib.metadata(m.call(self, ctx, ...rest) as never)))
              : lib.doc(lib.metadata(m.call(self, ...rest) as never))
          }
          const args = Object.keys(named).length ? [named, ...pos] : pos
          return f.contextual
            ? lib.doc(lib.context((ctx) => lib.metadata(fn(ctx, ...args))))
            : lib.doc(lib.metadata(fn(...args)))
        }
      docs.push([`${f.path} (base)`, call({})])
      // On a value, when the value can be one: data() makes an expression of a JS value.
      const selfSample = method ? base.self : undefined
      if (method && (isExpr(selfSample) || typeof selfSample !== 'function'))
        docs.push([`${f.path} (method)`, call({}, true)])
      // A sink that takes named arguments takes one of any name.
      // (A field of `heading` for `where`.)
      if (rt.openNamed)
        docs.push([`${f.path} (named into the sink)`, call(f.path === 'function.where' ? { level: 1 } : { zz: 1 })])
      for (const p of f.params)
        for (const c of flat(p.input)) {
          const v = sample(c, p.name)
          if (v === SKIP) continue
          const id = `${f.path}.${p.name} = ${c.kind === 'value' ? JSON.stringify(c.value) : c.type}`
          docs.push([id, call({ [p.name]: v })])
          const both =
            rt.pos.some((q: { name: string }) => q.name === p.name) &&
            Object.entries(rt.named).some(([k, n]: [string, any]) => (n.t ?? k) === p.name)
          if (both) docs.push([`${id} (positionally)`, call({ [p.name]: v }, false, true)])
        }
    }
    expect(await compileAll(docs, (id, m) => WIRING.test(m) && !(id in KNOWN))).toEqual([])
  })

  it('set every settable parameter', { timeout: 600_000 }, async () => {
    const docs: [string, () => unknown][] = []
    for (const f of spec.functions) {
      if (!f.element || SKIPPED.test(f.path)) continue
      for (const p of f.params) {
        if (!p.settable) continue
        const v = flat(p.input)
          .map((c) => sample(c, p.name))
          .find((x) => x !== SKIP)
        if (v === undefined) continue
        docs.push([`${f.path}.${p.name}`, () => lib.set(resolve(f.path), { [camel(p.name)]: v } as never)])
      }
    }
    expect(await compileAll(docs, (_, m) => WIRING.test(m))).toEqual([])
  })

  // Typst compares a field of content with content as it was built: where takes no such field.
  it('reject every content field in where', () => {
    const wrong: string[] = []
    for (const f of spec.functions) {
      if (!f.element || SKIPPED.test(f.path)) continue
      const fn = resolve(f.path)
      const rt = fn[RT]
      for (const [key, field] of Object.entries(rt.fields as Record<string, string>)) {
        const p = rt.named[key] ?? rt.pos.find((q: { name: string }) => q.name === field)
        if (!p?.c && !p?.sc) continue
        try {
          lib.where(fn, { [key]: 'x' } as never)
          wrong.push(`${f.path}.${field}`)
        } catch {}
      }
    }
    expect(wrong).toEqual([])
  })

  it('match every field with where', { timeout: 600_000 }, async () => {
    const docs: [string, () => unknown][] = []
    for (const f of spec.functions) {
      if (!f.element || SKIPPED.test(f.path)) continue
      const fn = resolve(f.path)
      const rt = fn[RT]
      for (const [key, field] of Object.entries(rt.fields as Record<string, string>)) {
        const p = rt.named[key] ?? rt.pos.find((q: { name: string }) => q.name === field)
        if (p?.c || p?.sc) continue
        docs.push([`${f.path}.${field}`, () => lib.show(lib.where(fn, { [key]: null } as never), lib.set(L.text!, {}))])
      }
    }
    expect(await compileAll(docs, (_, m) => WIRING.test(m))).toEqual([])
  })
})
