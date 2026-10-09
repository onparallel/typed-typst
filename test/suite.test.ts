/**
 * Rebuilds cases of Typst's own test suite with the library and checks that
 * they compile to the same PDF as the originals, byte for byte (the drawing, and
 * also links, bookmarks, metadata and the tagged structure).
 */
import { readdirSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { render } from '../src/index.ts'
import { CASES } from './suite/cases.ts'
import { typstCompile } from './helpers/typst.ts'

/** What the Typst test runner sets up (tests/src/world.rs). */
const PRELUDE = `#set page(width: 120pt, height: auto, margin: 10pt)
#set text(size: 10pt)
#let conifer = rgb("#9feb52")
#let forest = rgb("#43a127")
`

const ORIGINAL = new URL('./suite/original/', import.meta.url)
const originals = readdirSync(ORIGINAL)
  .filter((f) => f.endsWith('.typ'))
  .map((f) => f.slice(0, -4))
  .sort()

async function pages(source: string): Promise<Buffer[]> {
  const { output } = await typstCompile(PRELUDE + source, 'pdf')
  return [readFileSync(output)]
}

describe('Typst test suite', () => {
  it('has a reproduction for every extracted case', () => {
    expect(Object.keys(CASES).sort()).toEqual(originals)
  })

  it.concurrent.for(originals)('%s renders like the original', async (name, { expect }) => {
    const build = CASES[name]
    if (!build) throw new Error(`no reproduction for ${name}`)
    const source = render(build())
    await expect(source).toMatchFileSnapshot(`./suite/out/${name}.typ`)
    const [want, got] = await Promise.all([
      pages(readFileSync(new URL(`${name}.typ`, ORIGINAL), 'utf8')),
      pages(source),
    ])
    expect(want.length).toBeGreaterThan(0)
    expect(got.length).toBe(want.length)
    got.forEach((page, i) => expect(page.equals(want[i]!), `page ${i + 1} differs`).toBe(true))
  })
})
