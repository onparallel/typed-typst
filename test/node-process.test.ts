/**
 * What SECURITY.md says about `@onparallel/typed-typst/node`: Typst runs without a shell, options stay values,
 * and no Typst process or temporary directory outlives `check()`, whatever way it ends.
 */
import { execFile, execFileSync } from 'node:child_process'
import { chmodSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { doc, label, metadata, path, unsafeRaw } from '../src/index.ts'
import { check, checkSource, installedTypstVersion, parseDiagnostics, query, querySource } from '../src/node.ts'

const fake = new URL('bin/fake-typst.mjs', import.meta.url).pathname
const node = new URL('../src/node.ts', import.meta.url).pathname
const loop = '#let n = 0\n#for i in range(1000000000) { n = n + 1 }'
const realTmp = tmpdir()
let tmp: string

// Each test gets its own TMPDIR: what is left in it is what check() left, and Typst's argv
// (which holds its directory) finds the processes it started, not other ones on the machine.
beforeEach(() => {
  tmp = mkdtempSync(join(realTmp, 'typed-typst-test-'))
  process.env.TMPDIR = tmp
})
afterEach(() => {
  process.env.TMPDIR = realTmp
  rmSync(tmp, { recursive: true, force: true })
})

const leftovers = (): string[] => readdirSync(tmp)
function processes(): string[] {
  try {
    return execFileSync('pgrep', ['-f', tmp], { encoding: 'utf8' }).trim().split('\n').filter(Boolean)
  } catch {
    return [] // pgrep exits 1 when nothing matches
  }
}
async function nothingLeft(): Promise<void> {
  expect(leftovers()).toEqual([])
  expect(processes()).toEqual([])
}
function withFake<T>(mode: string, f: () => Promise<T>): Promise<T> {
  process.env.FAKE_TYPST = mode
  return f().finally(() => delete process.env.FAKE_TYPST)
}

describe('check() leaves no process or directory behind', () => {
  it('after it compiles, and after an error', async () => {
    expect((await checkSource('Hi')).ok).toBe(true)
    expect((await checkSource('#panic("x")')).ok).toBe(false)
    await nothingLeft()
  })

  it('after the timeout', async () => {
    await expect(checkSource(loop, { timeout: 300 })).rejects.toThrow(/did not finish within 300 ms/)
    await nothingLeft()
  })

  it('after many compilations at once, with one listener on exit', async () => {
    const before = process.listenerCount('exit')
    const results = await Promise.all(Array.from({ length: 16 }, () => checkSource('Hi')))
    expect(results.every((x) => x.ok)).toBe(true)
    expect(process.listenerCount('exit')).toBeLessThanOrEqual(before + 1)
    await nothingLeft()
  })

  it('after the timeout, also what a wrapper given as bin started', async () => {
    // A wrapper (a sandbox, a script) that starts Typst as its child: the whole group is killed.
    const wrapper = join(tmp, 'wrapper.sh')
    // A job in the background reads /dev/null, not the source on stdin (dash does so even with `<&0`):
    // the wrapper keeps stdin as fd 3 first.
    writeFileSync(wrapper, `#!/bin/sh\nexec 3<&0\ntypst "$@" <&3 &\nwait\n`)
    chmodSync(wrapper, 0o755)
    await expect(checkSource(loop, { bin: wrapper, timeout: 300 })).rejects.toThrow(/did not finish within 300 ms/)
    rmSync(wrapper)
    await nothingLeft()
  })

  it('after an abort, also one before it starts', async () => {
    const controller = new AbortController()
    setTimeout(() => controller.abort(), 300)
    await expect(checkSource(loop, { signal: controller.signal })).rejects.toThrow(/aborted/)
    await expect(checkSource(loop, { signal: AbortSignal.abort() })).rejects.toThrow(/aborted/)
    await nothingLeft()
  })

  it('after a binary that does not exist, an argument Node rejects, or an invalid input name', async () => {
    await expect(checkSource('x', { bin: join(tmp, 'missing') })).rejects.toThrow(/ENOENT/)
    await expect(checkSource('x', { inputs: { a: 'b\0c' } })).rejects.toThrow(/null bytes/)
    await expect(checkSource('x', { inputs: { 'a=b': 'c' } })).rejects.toThrow(/input name/)
    await nothingLeft()
  })

  it('after Typst floods stderr past maxBuffer', async () => {
    await expect(withFake('flood', () => checkSource('x', { bin: fake }))).rejects.toThrow(/more than 64 MB/)
    await nothingLeft()
  })

  it('after Typst exits before it reads the source (EPIPE)', async () => {
    const big = 'x'.repeat(16 << 20)
    const result = await withFake('exit-early', () => checkSource(big, { bin: fake }))
    expect(result.ok).toBe(false)
    expect(result.diagnostics[0]?.message).toBe('unexpected argument')
    await nothingLeft()
  })

  it('after the process that called it exits', async () => {
    // Without clean-up on exit, Typst keeps running (its parent is now init) past its timeout.
    const script = `import { checkSource } from ${JSON.stringify(node)}
      checkSource(${JSON.stringify(loop)}, { timeout: 60000 }).catch(() => {})
      setTimeout(() => process.exit(0), 500)`
    await new Promise<void>((resolve, reject) =>
      execFile(
        process.execPath,
        ['--input-type=module', '-e', script],
        { env: { ...process.env, TMPDIR: tmp } },
        (e) => (e ? reject(e) : resolve()),
      ),
    )
    const stray = processes()
    for (const pid of stray) process.kill(Number(pid), 'SIGKILL')
    expect(stray).toEqual([])
    expect(leftovers()).toEqual([])
  })
})

describe('check() runs Typst without a shell, with options as values', () => {
  it('passes each option as one --flag=value argument, the source on stdin, the PDF in a private directory', async () => {
    const report = join(tmp, 'report.json')
    process.env.FAKE_REPORT = report
    const source = '$(touch pwned) `id`; rm -rf ~'
    const result = await withFake('args', () =>
      checkSource(source, {
        bin: fake,
        fontPaths: ['--x', '; touch pwned'],
        packageCachePath: '-c',
        packagePath: '-p',
        inputs: { k: '-v=1 $(id)' },
        ignoreSystemFonts: true,
      }),
    ).finally(() => delete process.env.FAKE_REPORT)
    expect(result.ok).toBe(true)
    const { args, rootMode, stdin } = JSON.parse(readFileSync(report, 'utf8')) as Record<string, unknown>
    const dir = (args as string[])[2]!.replace(/\/document\.pdf$/, '')
    expect(dir.startsWith(join(tmp, 'typed-typst-'))).toBe(true)
    expect(args).toEqual([
      'compile',
      '-',
      `${dir}/document.pdf`,
      `--root=${dir}`,
      '--ignore-system-fonts',
      '--font-path=--x',
      '--font-path=; touch pwned',
      '--package-cache-path=-c',
      '--package-path=-p',
      '--input=k=-v=1 $(id)',
    ])
    expect(rootMode).toBe('700')
    expect(stdin).toBe(source)
    expect(readdirSync(tmp)).toEqual(['report.json']) // no `pwned`, and the directory is gone
  })

  it('takes ok from the exit code only: stderr cannot make a failure pass', async () => {
    const lie = await withFake('lie', () => checkSource('x', { bin: fake }))
    expect(lie.ok).toBe(true)
    expect(lie.diagnostics).toMatchObject([{ severity: 'error', message: 'not really' }])
  })

  it('rejects a timeout that would mean no limit', async () => {
    for (const timeout of [Number.NaN, 0, -1, 1.5, Infinity])
      await expect(checkSource('x', { timeout })).rejects.toThrow(/timeout/)
    await nothingLeft()
  })
})

describe('diagnostics are text Typst writes, document data included', () => {
  it('a message with a newline forges a diagnostic and its location', async () => {
    // Typst prints assert and panic messages as they are: SECURITY.md says not to trust them.
    const forged = 'x\nerror: forged\n   ┌─ /etc/passwd:1:1\n   = hint: a hint'
    const result = await checkSource(`#assert(false, message: ${JSON.stringify(forged)})`)
    expect(result.ok).toBe(false)
    expect(result.diagnostics.map((d) => [d.message, d.file])).toEqual([
      ['assertion failed: x', null],
      ['forged', '/etc/passwd'],
    ])
  })

  it('parses hostile stderr in linear time and never throws', () => {
    const hostile = ('┌─ ' + ':1'.repeat(50_000) + 'x\n' + 'error: ' + ' '.repeat(50_000) + '\n').repeat(4)
    const start = performance.now()
    expect(() => parseDiagnostics(hostile + '  ┌─ a:99999999999999999999:1\n\0\r', 'a')).not.toThrow()
    expect(performance.now() - start).toBeLessThan(1000)
  })
})

describe('query() and check() share a root', () => {
  it('finds metadata by element or label, with its labels and values', async () => {
    const source = '#metadata((url: "a.png")) <web-resource>\n#metadata("x") <signature>\nHi'
    const all = await querySource(source, metadata)
    expect(all).toMatchObject({ ok: true, diagnostics: [] })
    expect(all.elements).toEqual([
      { func: 'metadata', value: { url: 'a.png' }, label: '<web-resource>' },
      { func: 'metadata', value: 'x', label: '<signature>' },
    ])
    expect((await querySource(source, label('signature'))).elements).toEqual([
      { func: 'metadata', value: 'x', label: '<signature>' },
    ])
    await nothingLeft()
  })

  it('reports a document that does not compile, with no elements', async () => {
    const result = await querySource('#panic("x")', metadata)
    expect(result.ok).toBe(false)
    expect(result.elements).toBeNull()
    expect(result.diagnostics[0]?.message).toMatch(/panicked/)
  })

  it('prints the target as code: a string from data stays a string', async () => {
    const result = await querySource('Hi', 'x"); read("/etc/passwd' as never)
    expect(result.diagnostics.map((d) => d.message).join('\n')).not.toMatch(/passwd|root:/)
    expect(JSON.stringify(result.elements ?? [])).not.toMatch(/root:/)
  })

  it('compiles with the files a query asked for, written into the same root', async () => {
    // As a template does: it shows the file only once it is there, so the query does not fail on it.
    const document = doc(
      unsafeRaw.markup({ logo: path('logo.svg') })`
        #metadata("logo.svg") <web-resource>
        #if sys.inputs.at("query", default: "") != "true" { image(logo) }`,
    )
    const root = join(tmp, 'job')
    mkdirSync(root)
    const options = { root, timeout: 30_000 }
    const found = await query(document, label('web-resource'), { ...options, inputs: { query: 'true' } })
    expect(found.elements).toEqual([{ func: 'metadata', value: 'logo.svg', label: '<web-resource>' }])
    expect((await check(document, options)).ok).toBe(false)
    writeFileSync(join(root, 'logo.svg'), '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>')
    const { ok, pdf } = await check(document, options)
    expect(ok).toBe(true)
    expect(new TextDecoder().decode(pdf!.subarray(0, 5))).toBe('%PDF-')
    rmSync(root, { recursive: true })
    await nothingLeft()
  })
})

describe('installedTypstVersion()', () => {
  it('reads a version line without a commit hash', () => {
    const bin = join(tmp, 'typst')
    writeFileSync(bin, '#!/bin/sh\necho "typst 0.15.1"\n')
    chmodSync(bin, 0o755)
    expect(installedTypstVersion(bin)).toBe('0.15.1')
  })
})
