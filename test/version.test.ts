import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { doc, render, unsafeRaw, versionGuard } from '../src/index.ts'
import { checkTypstVersion, installedTypstVersion, TYPST_VERSION } from '../src/node.ts'
import { typstCompile } from './helpers/typst.ts'

describe('version pinning', () => {
  it('matches the installed binary', () => {
    expect(installedTypstVersion()).toBe(TYPST_VERSION)
    expect(() => checkTypstVersion()).not.toThrow()
  })

  it('names the Typst version in the package version', () => {
    // Typst a.b.c, revision r of the bindings: a.b.(c * 100 + r).
    const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as {
      version: string
    }
    // Until the first release the version is 0.0.0.
    if (version === '0.0.0') return
    const [major, minor, patch] = version.split('.').map(Number) as [number, number, number]
    expect(`${major}.${minor}.${Math.floor(patch / 100)}`).toBe(TYPST_VERSION)
    expect(version).toMatch(/^\d+\.\d+\.\d+$/)
  })

  it('fails for another binary', () => {
    expect(() => checkTypstVersion('/usr/bin/false')).toThrow()
  })

  it('guards the document', async () => {
    const source = render(doc(versionGuard(), 'ok'))
    await expect(typstCompile(source)).resolves.toBeTruthy()
    const other = source.replace(/version\(\d+, \d+, \d+\)/, 'version(0, 0, 1)')
    await expect(typstCompile(other)).rejects.toThrow(/generated for Typst/)
  })

  it('rejects a forged template', () => {
    const forged = Object.assign(['#x'], { raw: ['#x'] }) as unknown as TemplateStringsArray
    // eslint-disable-next-line typed-typst/unsafe-raw -- this test checks the runtime guard
    expect(() => unsafeRaw.markup(forged)).toThrow(/literal template/)
  })
})
