/**
 * The library in a browser bundle: no Node APIs, the methods of values still
 * work (they are installed by the one module with a side effect), and what a
 * program does not use is left out.
 */
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { build } from 'esbuild'
import { afterAll, describe, expect, it } from 'vitest'
import { data, doc, inline, pct, render, rgb } from '../src/index.ts'

const index = new URL('../src/index.ts', import.meta.url).pathname
const dir = mkdtempSync(join(tmpdir(), 'typed-typst-bundle-'))
afterAll(() => rmSync(dir, { recursive: true, force: true }))

/** Bundles `code` for the browser, minified; returns the size and the module. */
async function bundle(code: string): Promise<{ size: number; mod: Record<string, unknown> }> {
  const out = join(dir, `${Math.random().toString(36).slice(2)}.js`)
  await build({
    stdin: { contents: code, resolveDir: dir, loader: 'ts' },
    bundle: true,
    minify: true,
    format: 'esm',
    platform: 'browser',
    outfile: out,
    logLevel: 'silent',
  })
  return { size: readFileSync(out).length, mod: (await import(out)) as Record<string, unknown> }
}

describe('a browser bundle', () => {
  it('needs no Node API and keeps the methods of values', async () => {
    // Nothing here comes from gen/std.ts, which installs the methods: only its side effect keeps it.
    const { mod } = await bundle(`
      import { data, doc, inline, pct, render, rgb } from ${JSON.stringify(index)}
      export const out = render(doc(inline(data(['x', 'y']).len(), ' ', rgb('#ff8800').lighten(pct(50)))))
    `)
    const direct = render(doc(inline(data(['x', 'y']).len(), ' ', rgb('#ff8800').lighten(pct(50)))))
    expect(mod.out).toBe(direct)
    expect(direct).toContain('("x", "y").len()')
  })

  it('leaves out the definitions a program does not use', async () => {
    const small = await bundle(`
      import { doc, inline, render, strong } from ${JSON.stringify(index)}
      export const out = render(doc(inline('a ', strong('b'))))
    `)
    const all = await bundle(`
      import * as lib from ${JSON.stringify(index)}
      export const out = Object.keys(lib).length
    `)
    expect(small.mod.out).toBe('a #strong("b")\n')
    // Measured at 49 kB of 131 kB (Typst 0.15.1): the budget catches a definition that stops being dropped.
    expect(small.size).toBeLessThan(60_000)
    expect(small.size).toBeLessThan(all.size / 2)
  })

  it('marks the module with a side effect, in src/ and in dist/', () => {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as {
      sideEffects: string[]
    }
    expect(pkg.sideEffects).toEqual(['./dist/gen/std.js', './src/gen/std.ts'])
  })
})
