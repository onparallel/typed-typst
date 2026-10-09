/** `check`: printing a document, compiling it, and reporting what Typst says. */
import { mkdtempSync, readdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { doc, heading, image, inline, label, labelled, m, path, ref, text } from '../src/index.ts'
import { check, checkSource, parseDiagnostics } from '../src/node.ts'

describe('check', () => {
  it('returns the PDF of a document that compiles', async () => {
    const result = await check(doc(m.heading(1, 'Hello')))
    expect(result.ok).toBe(true)
    expect(result.diagnostics).toEqual([])
    expect(new TextDecoder().decode(result.pdf!.slice(0, 5))).toBe('%PDF-')
    expect(result.source).toBe('= Hello\n')
  })

  it('reports errors with the line of the printed source and the hints', async () => {
    const result = await check(doc(labelled(heading({ depth: 1 }, 'A'), label('a')), inline(ref(label('a')))))
    expect(result.ok).toBe(false)
    expect(result.pdf).toBeNull()
    expect(result.diagnostics).toEqual([
      {
        severity: 'error',
        message: 'cannot reference heading without numbering',
        file: null,
        line: 3,
        column: 2,
        sourceLine: '#ref(<a>)',
        hints: ['you can enable heading numbering with `#set heading(numbering: "1.")`'],
      },
    ])
  })

  it('resolves files from the root, and writes nothing there', async () => {
    const root = mkdtempSync(join(tmpdir(), 'check-root-'))
    writeFileSync(join(root, 'logo.svg'), '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>')
    expect((await check(doc(image(path('logo.svg'))), { root })).ok).toBe(true)
    const missing = await check(doc(image(path('nope.png'))), { root })
    expect(missing.ok).toBe(false)
    expect(missing.diagnostics[0]!.message).toMatch(/file not found/)
    expect(readdirSync(root)).toEqual(['logo.svg'])
  })

  it('reports warnings without failing', async () => {
    const result = await check(doc(text({ font: 'No Such Font' }, 'x')), { ignoreSystemFonts: true })
    expect(result.ok).toBe(true)
    expect(result.diagnostics.map((d) => [d.severity, d.message])).toContainEqual([
      'warning',
      'unknown font family: no such font',
    ])
  })

  it('checks printed source too', async () => {
    const result = await checkSource('#unknown')
    expect(result.diagnostics.map((d) => d.message)).toEqual(['unknown variable: unknown'])
  })
})

describe('parseDiagnostics', () => {
  it('reads files other than the document, and messages without a location', () => {
    const stderr = [
      'error: expected length, found string',
      '   ┌─ @preview/pkg:0.1.0/lib.typ:3:9',
      '  │',
      '3 │   v(size)',
      '  │     ^^^^',
      '',
      'error: failed to download package',
      '  = hint: check your connection',
    ].join('\n')
    expect(parseDiagnostics(stderr, '')).toEqual([
      {
        severity: 'error',
        message: 'expected length, found string',
        file: '@preview/pkg:0.1.0/lib.typ',
        line: 3,
        column: 10,
        sourceLine: null,
        hints: [],
      },
      {
        severity: 'error',
        message: 'failed to download package',
        file: null,
        line: null,
        column: null,
        sourceLine: null,
        hints: ['check your connection'],
      },
    ])
  })
})
