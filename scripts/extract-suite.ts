/**
 * Copies cases of Typst's own test suite.
 *
 * Usage:
 *   node scripts/extract-suite.ts <typst checkout> <case>...   cases for hand-written reproductions (test/suite/original/)
 *   node scripts/extract-suite.ts <typst checkout> --corpus     every case that can be converted (test/suite/corpus/)
 *
 * The checkout's tag must match typst-version. The corpus leaves out cases that
 * do not render pages, that expect an error or a warning (the API does not
 * produce invalid source), that test the parser, that use the test runner's
 * helpers (the cases that use files from typst-dev-assets need tools/dev-assets.sh).
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const [repo, ...args] = process.argv.slice(2)
const corpus = args[0] === '--corpus'
const names = corpus ? [] : args
if (!repo || (!corpus && !names.length))
  throw new Error('usage: extract-suite.ts <typst checkout> (<case>... | --corpus)')
const version = readFileSync(new URL('../typst-version', import.meta.url), 'utf8').trim()
const tag = execFileSync('git', ['-C', repo, 'describe', '--tags', '--exact-match'], { encoding: 'utf8' }).trim()
if (tag !== `v${version}`) throw new Error(`checkout is at ${tag}, expected v${version}`)

const suite = join(repo, 'tests', 'suite')
const cases = new Map<string, { file: string; attrs: string; body: string }>()
const walk = (dir: string): void => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path)
    else if (entry.name.endsWith('.typ')) {
      const parts = readFileSync(path, 'utf8').split(/^--- (\S+)([^\n]*)---\n/m)
      for (let i = 1; i < parts.length; i += 3)
        cases.set(parts[i]!, { file: relative(repo, path), attrs: parts[i + 1]!, body: parts[i + 2]! })
    }
  }
}
walk(suite)

// Cases that render pages (`paged`), check the PDF (`pdf`, `pdftags`) or only run code (`eval`, compared
// as the PDF of what they show): not HTML or multi-file bundles.
const convertible = (c: { file: string; attrs: string; body: string }) =>
  /\b(paged|pdf|pdftags|eval)\b/.test(c.attrs) &&
  !/\/\/ (Error|Warning|Hint)/.test(c.body) &&
  !c.file.includes('/syntax/') &&
  // Files next to the test (imports, includes, reads of relative paths), the runner's test
  // packages (`@test/…`), and the runner's `bounds`.
  !/\b(import|include) *"[^@]/.test(c.body) &&
  !/"[^"@/][^"]*\.typ"/.test(c.body) &&
  !/\bread\("[^/]/.test(c.body) &&
  !/"@test\//.test(c.body) &&
  !/\bbounds\b/.test(c.body) &&
  // The HTML module is an in-development feature.
  !/\bhtml\./.test(c.body)
const selected = corpus ? [...cases.keys()].filter((n) => convertible(cases.get(n)!)).sort() : names
const dir = corpus ? 'corpus' : 'original'
// The corpus is regenerated as a whole, so that cases that no longer qualify go away.
if (corpus) rmSync(new URL(`../test/suite/${dir}/`, import.meta.url), { recursive: true, force: true })
mkdirSync(new URL(`../test/suite/${dir}/`, import.meta.url), { recursive: true })
for (const name of selected) {
  const found = cases.get(name)
  if (!found) throw new Error(`no case ${name}`)
  // The attributes besides `paged`, which the comparison needs (`pdfstandard(ua-1)`).
  const attrs = found.attrs.trim() === 'paged' ? '' : `, attributes: ${found.attrs.trim()}`
  const header = `// Typst ${version} test suite: ${found.file}, case ${name}${attrs}.\n// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).\n`
  writeFileSync(new URL(`../test/suite/${dir}/${name}.typ`, import.meta.url), header + found.body.trimEnd() + '\n')
}
console.log(`extracted ${selected.length} cases into test/suite/${dir}/`)
