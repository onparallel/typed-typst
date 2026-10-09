/**
 * What SECURITY.md says about `@onparallel/typed-typst/node`: Typst runs without a shell, options stay values,
 * and no Typst process or temporary directory outlives `check()`, whatever way it ends.
 */
import { execFile, execFileSync } from 'node:child_process'
import { chmodSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { checkSource, installedTypstVersion, parseDiagnostics } from '../src/node.ts'

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

describe('installedTypstVersion()', () => {
  it('reads a version line without a commit hash', () => {
    const bin = join(tmp, 'typst')
    writeFileSync(bin, '#!/bin/sh\necho "typst 0.15.1"\n')
    chmodSync(bin, 0o755)
    expect(installedTypstVersion(bin)).toBe('0.15.1')
  })
})
