import { mkdirSync, writeFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { render } from '../src/index.ts'
import { hostile, report } from '../examples/report.ts'
import { hostileUser, scripting } from '../examples/scripting.ts'
import { typstCompileFile, typstEval } from './helpers/typst.ts'

const ROOT = new URL('../examples/', import.meta.url).pathname
const EXAMPLES: Record<string, () => string> = {
  report: () => render(report(hostile)),
  scripting: () => render(scripting(hostileUser)),
}

describe.each(Object.entries(EXAMPLES))('example %s', (name, build) => {
  const source = build()

  it('matches the source snapshot', async () => {
    await expect(source).toMatchFileSnapshot(`../examples/out/${name}.typ`)
  })

  it('compiles without warnings', async () => {
    // Compiled from a sibling of out/, so that its imports (`../templates.typ`) resolve.
    const file = `${ROOT}.build/${name}.typ`
    mkdirSync(`${ROOT}.build`, { recursive: true })
    writeFileSync(file, source)
    expect(await typstCompileFile(file, ROOT)).toBe('')
  })

  it('prints deterministically', () => {
    expect(build()).toBe(source)
  })
})

it('report exposes the regions as labelled metadata', async () => {
  const value = await typstEval(render(report(hostile)), 'query(<regions>).first().value')
  expect(value).toEqual({ regions: hostile.rows.map((row) => row.region) })
})

it('loads files through literal paths', async () => {
  const { typstCompileFile } = await import('./helpers/typst.ts')
  const { writeFileSync } = await import('node:fs')
  const { box, doc, image, json, metadata, path, render } = await import('../src/index.ts')
  const file = new URL('./.out/paths.typ', import.meta.url).pathname
  writeFileSync(
    file,
    render(doc(box(image(path('../fixtures/logo.svg'))), metadata(json(path('../fixtures/data.json'))))),
  )
  expect(await typstCompileFile(file, new URL('.', import.meta.url).pathname)).toBe('')
})
