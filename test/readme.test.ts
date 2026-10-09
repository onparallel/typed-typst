/** The README's first example prints exactly the source the README shows. */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { expect, it } from 'vitest'

const root = new URL('..', import.meta.url).pathname
const readme = readFileSync(`${root}README.md`, 'utf8')

it('prints the source the README shows', async () => {
  const code = /```ts\n([\s\S]*?)```/
    .exec(readme)![1]!
    .replaceAll("from '@onparallel/typed-typst'", "from '../../src/index.ts'")
  const shown = /```typst\n([\s\S]*?)```/.exec(readme)![1]!
  mkdirSync(`${root}test/.out`, { recursive: true })
  const file = `${root}test/.out/readme.ts`
  writeFileSync(file, `${code}\nexport { source }\n`)
  const { source } = (await import(file)) as { source: string }
  expect(source).toBe(shown)
})
