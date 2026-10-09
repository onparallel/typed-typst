/** Test helpers that run the Typst binary. */
import { execFile } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'

const run = promisify(execFile)
const OUT = new URL('../.out/', import.meta.url).pathname
mkdirSync(OUT, { recursive: true })

let counter = 0
function file(source: string, ext = 'typ'): string {
  const path = join(OUT, `${process.pid}-${counter++}.${ext}`)
  writeFileSync(path, source)
  return path
}

const FONTS = ['--ignore-system-fonts']

/** Evaluates `expression` in the context of `source` and parses the JSON result. */
export async function typstEval(source: string, expression: string): Promise<unknown> {
  const { stdout } = await run('typst', ['eval', expression, '--in', file(source), ...FONTS], { maxBuffer: 64 << 20 })
  return JSON.parse(stdout)
}

/** Compiles `source`; resolves with the warnings, rejects with the errors. */
export async function typstCompile(
  source: string,
  format: 'pdf' | 'png' | 'svg' = 'pdf',
  root?: string,
): Promise<{ stderr: string; output: string }> {
  const input = file(source)
  const output = input.replace(/\.typ$/, format === 'pdf' ? '.pdf' : `-{0p}.${format}`)
  const args = [
    'compile',
    input,
    output,
    ...FONTS,
    ...(format === 'png' ? ['--ppi', '72'] : []),
    // A fixed creation date, so that the same document gives the same PDF bytes.
    '--creation-timestamp',
    '0',
    ...(root ? ['--root', root] : []),
  ]
  const { stderr } = await run('typst', args)
  return { stderr, output }
}

/** Compiles a file in place (its imports resolve against `root`); resolves with the warnings. */
export async function typstCompileFile(input: string, root: string): Promise<string> {
  const output = join(OUT, `${process.pid}-${counter++}.pdf`)
  const { stderr } = await run('typst', ['compile', input, output, ...FONTS, '--root', root])
  return stderr
}

/** A Typst function that extracts the plain text of content (see injection tests). */
export const PLAIN = readFileSync(new URL('./plain.typ', import.meta.url), 'utf8')
