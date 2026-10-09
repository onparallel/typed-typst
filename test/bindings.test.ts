/** The generated bindings against the Typst binary. */
import { describe, expect, it } from 'vitest'
import * as lib from '../src/index.ts'
import { inline, render } from '../src/index.ts'
import { RT } from '../src/core.ts'
import { STD_GLOBALS } from '../src/gen/std.ts'
import { typstEval } from './helpers/typst.ts'
import { values as overlayValues } from '../spec/overlay.ts'

/** Every generated function reachable from the exports, by its Typst path. */
function paths(value: unknown, seen = new Set<unknown>()): string[] {
  if ((typeof value !== 'object' && typeof value !== 'function') || value === null || seen.has(value)) return []
  seen.add(value)
  const own = typeof value === 'function' && RT in value ? [(value as { [RT]: { path: string } })[RT].path] : []
  return [...own, ...Object.values(value).flatMap((v) => paths(v, seen))]
}

const all = [...new Set(Object.values(lib).flatMap((v) => paths(v)))].sort()

/** Every symbol path, from walking the generated modules. */
function symbolPaths(): string[] {
  const out: string[] = []
  const walk = (node: object): void => {
    for (const child of Object.values(node)) {
      if (Object.getOwnPropertySymbols(child).length)
        out.push(
          render(inline(child as never))
            .trim()
            .slice(1),
        )
      walk(child as object)
    }
  }
  walk(lib.sym)
  walk(lib.emoji)
  return out
}

describe('generated bindings', () => {
  it('name only symbols that exist in Typst', async () => {
    const all = symbolPaths()
    expect(all.length).toBeGreaterThan(2500)
    expect(await typstEval('', `(${all.join(', ')},).len()`)).toBe(all.length)
  })

  it('cover the standard library', () => {
    expect(all.length).toBeGreaterThan(380)
  })

  it('name only definitions that exist in Typst', async () => {
    // Evaluating each path as a value fails on the first one Typst does not know.
    const got = await typstEval('', `(${all.map((p) => `repr(${p})`).join(', ')},).len()`)
    expect(got).toBe(all.length)
  })

  it('know every global name, so that the printer can reach a hidden one through std', async () => {
    const globals = (await typstEval('', 'dictionary(std).keys()')) as string[]
    expect(globals.filter((g) => !STD_GLOBALS.has(g))).toEqual([])
  })

  it('add the values of the overlay with the types Typst gives them', async () => {
    for (const [module, { type, names }] of Object.entries(overlayValues)) {
      const types = await typstEval('', `(${names.map((n) => `str(type(${module}.${n}))`).join(', ')},)`)
      expect(types).toEqual(names.map(() => type))
    }
    // Every color map is listed.
    expect(await typstEval('', 'dictionary(color.map).keys()')).toEqual(overlayValues['color.map']!.names)
  })
})
