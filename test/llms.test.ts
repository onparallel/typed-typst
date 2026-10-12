/** Every TypeScript block of llms.txt type-checks and runs. */
import { execFile } from 'node:child_process'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { promisify } from 'node:util'
import { describe, expect, it } from 'vitest'

const run = promisify(execFile)
const root = new URL('..', import.meta.url).pathname
const dir = `${root}test/.out/llms/`
const blocks = [...readFileSync(`${root}llms.txt`, 'utf8').matchAll(/```ts\n([\s\S]*?)```/g)].map((m) =>
  m[1]!
    .replaceAll("from '@onparallel/typed-typst'", "from '../../../src/index.ts'")
    .replaceAll("from '@onparallel/typed-typst/node'", "from '../../../src/node.ts'"),
)

describe('llms.txt', () => {
  rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })
  const files = blocks.map((code, i) => {
    const file = `${dir}block${i}.ts`
    writeFileSync(file, code)
    return file
  })

  it('has examples', () => {
    expect(blocks.length).toBeGreaterThan(5)
  })

  it('type-checks every block', async () => {
    writeFileSync(
      `${dir}tsconfig.json`,
      JSON.stringify({ extends: '../../../tsconfig.json', include: ['*.ts'], exclude: [] }),
    )
    const result = await run('npx', ['tsc', '--noEmit', '-p', `${dir}tsconfig.json`], { cwd: root }).then(
      () => '',
      (e: { stdout?: string }) => e.stdout ?? String(e),
    )
    expect(result).toBe('')
  })

  it('runs every block', async () => {
    for (const file of files) await import(file)
  })
})
