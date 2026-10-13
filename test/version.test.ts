import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { doc, render, unsafeRaw, versionGuard } from '../src/index.ts'
import { TYPST_VERSION, typst } from '../src/node.ts'
import { typstCompile } from './helpers/typst.ts'

describe('version pinning', () => {
  it('matches the installed binary', () => {
    expect(typst().version()).toBe(TYPST_VERSION)
    expect(() => typst().checkVersion()).not.toThrow()
  })

  it('names the Typst version in the package version', () => {
    // Typst a.b.c, revision r of the bindings: a.b.(c * 100 + r).
    const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as {
      version: string
    }
    const [major, minor, patch] = version.split('.').map(Number) as [number, number, number]
    expect(`${major}.${minor}.${Math.floor(patch / 100)}`).toBe(TYPST_VERSION)
    expect(version).toMatch(/^\d+\.\d+\.\d+$/)
  })

  it('fails for another binary', () => {
    expect(() => typst({ bin: '/usr/bin/false' }).checkVersion()).toThrow()
  })

  it('guards the document', async () => {
    const source = render(doc(versionGuard(), 'ok'))
    await expect(typstCompile(source)).resolves.toBeTruthy()
    const other = source.replace(/version\(\d+, \d+, \d+\)/, 'version(0, 0, 1)')
    await expect(typstCompile(other)).rejects.toThrow(/generated for Typst/)
  })

  it('rejects a forged template', () => {
    const forged = Object.assign(['#x'], { raw: ['#x'] }) as unknown as TemplateStringsArray
    expect(() => unsafeRaw.markup(forged)).toThrow(/literal template/)
  })
})
