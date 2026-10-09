/**
 * Compiles every converted suite case and its original to PDF, and compares the files byte for byte.
 *
 * Usage:
 *   node scripts/check-converted.ts            check every case, write test/suite/converted.results.json
 *   node scripts/check-converted.ts --check    check every case, fail unless each passes or fails as
 *                                              test/<set>/known-failures.ts says (a known failure that
 *                                              passes fails the check too)
 *   node scripts/check-converted.ts <case>…    check some cases
 *   node scripts/check-converted.ts --universe [--check | <case>…]
 *                                              the same for the Typst Universe templates (test/universe/)
 *
 * Needs tools/dev-assets.sh (and, for --universe, scripts/extract-universe.ts). For each case: `pass`, `type-error` (the same document, but the TS code does
 * not type-check), `differs`, `throws` (the TS code or the printer threw) or
 * `error` (Typst rejected the printed source), `original-error` (the original
 * does not compile here either) or `unsupported` (the converter could not translate it). Only `pass` counts: a document
 * that renders right from code the type checker rejects is not written with
 * the library as a user would write it.
 */
import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { cpus } from 'node:os'
import { promisify } from 'node:util'
import { render } from '../src/index.ts'
import { checkKnown, type KnownFailures, type Status } from './known-failures.ts'

const run = promisify(execFile)
const argv = process.argv.slice(2)
/**
 * Typst's test suite, or Typst Universe templates: these are real documents,
 * compiled as they are, in the project that `typst init` creates.
 */
const universe = argv[0] === '--universe'
if (universe) argv.shift()
const set = universe ? 'universe' : 'suite'
const root = new URL(`../test/${set}/`, import.meta.url)
const out = new URL('../test/.out/converted/', import.meta.url).pathname
const cache = new URL('../.cache/', import.meta.url).pathname
if (!universe) {
  rmSync(out, { recursive: true, force: true })
  mkdirSync(out, { recursive: true })
}

/**
 * What Typst's test runner sets up (tests/src/world.rs): page and text size,
 * two colors, and its helper functions, written in Typst (`bounds`, a layout
 * debugger, cannot be; its cases are left out).
 */
export const PRELUDE = `#set page(width: 120pt, height: auto, margin: 10pt)
#set text(size: 10pt)
#let conifer = rgb("#9feb52")
#let forest = rgb("#43a127")
#let test(lhs, rhs) = assert(lhs == rhs, message: "Assertion failed: " + repr(lhs) + " != " + repr(rhs))
#let test-repr(lhs, rhs) = assert(repr(lhs) == repr(rhs), message: "Assertion failed: " + repr(lhs) + " != " + repr(rhs))
#let print(..values) = none
#let lines(count, ..args) = { let pattern = args.pos().at(0, default: "A"); range(1, count + 1).map(n => numbering(pattern, n)).join("\\n") }
`

/**
 * The PDF, with a fixed creation date. Equal bytes mean an equal document: the
 * drawing, and also what a picture does not show (links, bookmarks, metadata,
 * the tagged structure).
 */
// The files and fonts of Typst's test suite (tools/dev-assets.sh): `/assets/…` resolves to them, as in its runner.
const assets = new URL('../.cache/typst-dev-assets/files/', import.meta.url).pathname
if (!existsSync(assets)) throw new Error('run tools/dev-assets.sh first')
if (!universe) symlinkSync(assets, `${out}assets`)

/** Where the case lives in Typst's repository (`tests/suite/visualize`): relative paths resolve from there. */
function caseDir(name: string): string {
  if (universe) return `${cache}universe/${name}/`
  const header = readFileSync(new URL(`corpus/${name}.typ`, root), 'utf8').split('\n')[0]!
  const dir = /test suite: (tests\/suite\/\S+)\/[^/]+\.typ/.exec(header)?.[1] ?? 'tests/suite'
  mkdirSync(`${out}${dir}`, { recursive: true })
  return `${out}${dir}/`
}

/** The PDF standards a suite case asks for (`pdfstandard(ua-1)` in its attributes), as the runner enforces them. */
function pdfStandards(name: string): string[] {
  if (universe) return []
  const header = readFileSync(new URL(`corpus/${name}.typ`, root), 'utf8').split('\n')[0]!
  const standards = /pdfstandard\(([^)]*)\)/.exec(header)?.[1]
  return standards ? ['--pdf-standard', standards.replace(/\s/g, '')] : []
}

async function pages(name: string, source: string): Promise<Buffer[]> {
  const base = caseDir(name.replace(/\.orig$/, ''))
  // In a template's project, next to its files: names that no template uses.
  const file = universe ? `${base}__${name.endsWith('.orig') ? 'orig' : 'conv'}__.typ` : `${base}${name}.typ`
  const pdf = file.replace(/\.typ$/, '.pdf')
  // PDF/UA needs a title: the runner names an untitled document after its case (tests/src/run.rs).
  const title = pdfStandards(name.replace(/\.orig$/, '')).length
    ? `#set document(title: ${JSON.stringify(name.replace(/\.orig$/, ''))})\n`
    : ''
  writeFileSync(file, universe ? source : PRELUDE + title + source)
  await run('typst', [
    'compile',
    file,
    pdf,
    '--root',
    universe ? base : out,
    ...(universe ? ['--package-cache-path', `${cache}typst-packages`] : []),
    '--ignore-system-fonts',
    '--font-path',
    `${assets}fonts`,
    // The runner's clock (`datetime.today()`): 1970-01-01 at noon (tests/src/world.rs).
    '--creation-timestamp',
    universe ? '0' : '43200',
    // The runner enables Typst's in-development features too.
    ...(universe ? [] : ['--features', 'html,bundle,a11y-extras']),
    ...pdfStandards(name.replace(/\.orig$/, '')),
  ])
  return [readFileSync(pdf)]
}

const report = JSON.parse(readFileSync(new URL('converted/report.json', root), 'utf8')) as {
  name: string
  status: string
}[]
const checkMode = argv[0] === '--check'
const only = checkMode ? [] : argv
const chosen = report.filter((r) => !only.length || only.includes(r.name))
const names = chosen.filter((r) => r.status !== 'unsupported').map((r) => r.name)
const results: Record<string, { status: Status; detail?: string }> = {}
// A case the converter could not translate is a failure too, with the converter's reason.
for (const r of chosen)
  if (r.status === 'unsupported') results[r.name] = { status: 'unsupported', detail: (r as { reason?: string }).reason }

async function check(name: string): Promise<void> {
  let source: string
  try {
    const mod = (await import(new URL(`converted/${name}.ts`, root).href)) as { default: () => unknown }
    source = render(mod.default())
  } catch (e) {
    results[name] = { status: 'throws', detail: String(e).split('\n')[0] }
    return
  }
  try {
    const original = readFileSync(new URL(`corpus/${name}.typ`, root), 'utf8')
    // An original that does not compile here says nothing about the library.
    let want: Buffer[]
    try {
      want = await pages(`${name}.orig`, original)
    } catch (e) {
      const stderr = String((e as { stderr?: string }).stderr ?? e)
      results[name] = { status: 'original-error', detail: stderr.split('\n').find((l) => l.startsWith('error')) }
      return
    }
    const got = await pages(name, source)
    const same = want.length > 0 && want.length === got.length && got.every((p, i) => p.equals(want[i]!))
    results[name] = { status: !same ? 'differs' : typeErrors.has(name) ? 'type-error' : 'pass' }
  } catch (e) {
    const stderr = String((e as { stderr?: string }).stderr ?? e)
    results[name] = {
      status: 'error',
      detail: stderr.split('\n').find((l) => l.startsWith('error')) ?? stderr.split('\n')[0],
    }
  }
}

// Type-check every conversion once; a file with an error cannot pass.
const typeErrors = new Set<string>()
try {
  await run('npx', ['tsc', '--noEmit', '-p', 'tsconfig.converted.json'], {
    cwd: new URL('..', import.meta.url).pathname,
    maxBuffer: 64 << 20,
  })
} catch (e) {
  for (const m of String((e as { stdout?: string }).stdout ?? '').matchAll(
    new RegExp(`^test/${set}/converted/([^(]+)\\.ts\\(`, 'gm'),
  ))
    typeErrors.add(m[1]!)
}

const queue = [...names]
await Promise.all(
  Array.from({ length: cpus().length }, async () => {
    for (let name = queue.shift(); name; name = queue.shift()) await check(name)
  }),
)
// Compilations in parallel can race on the package cache (one reads a package another is still
// unpacking): a case that failed to compile is checked again, alone.
for (const name of names.filter((n) => ['error', 'differs', 'original-error'].includes(results[n]!.status)))
  await check(name)
const sorted = Object.fromEntries(Object.entries(results).sort(([a], [b]) => a.localeCompare(b)))
const resultsFile = new URL('converted.results.json', root)
if (!checkMode && !only.length) writeFileSync(resultsFile, JSON.stringify(sorted, null, 1) + '\n')
// Every case passes, or fails as `known-failures.ts` says it does.
const { knownFailures } = (await import(new URL('known-failures.ts', root).href)) as { knownFailures: KnownFailures }
const known = only.length
  ? Object.fromEntries(Object.entries(knownFailures).filter(([n]) => only.includes(n)))
  : knownFailures
const problems = checkKnown(results, known)
for (const p of problems) console.error(p)
if (checkMode && problems.length) process.exitCode = 1
const counts: Record<string, number> = {}
for (const r of Object.values(results)) counts[r.status] = (counts[r.status] ?? 0) + 1
console.log(counts)
const details = new Map<string, number>()
for (const r of Object.values(results))
  if (r.detail) details.set(r.detail.slice(0, 100), (details.get(r.detail.slice(0, 100)) ?? 0) + 1)
console.log(
  [...details]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([d, n]) => `  ${n} ${d}`)
    .join('\n'),
)
