/**
 * Copies the documents of some Typst Universe templates (papers, theses, CVs,
 * letters…), as real-world documents to reproduce with the library.
 *
 * Usage: node scripts/extract-universe.ts
 *
 * For each package in test/universe/packages.json, `typst init` creates the
 * template project in .cache/universe/<name>/ (with its images and
 * bibliographies), and packages are cached in .cache/typst-packages, never in
 * the user's cache. The template's entrypoint is copied to
 * test/universe/corpus/<name>.typ with a header that credits it.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

interface Package {
  name: string
  version: string
  entrypoint: string
  license: string
}

const root = new URL('..', import.meta.url).pathname
const packages = JSON.parse(readFileSync(`${root}test/universe/packages.json`, 'utf8')) as Package[]
const cache = `${root}.cache/`
mkdirSync(`${cache}universe`, { recursive: true })
rmSync(`${root}test/universe/corpus`, { recursive: true, force: true })
mkdirSync(`${root}test/universe/corpus`, { recursive: true })
for (const p of packages) {
  const dir = `${cache}universe/${p.name}`
  if (!existsSync(dir))
    execFileSync('typst', [
      'init',
      '--package-cache-path',
      `${cache}typst-packages`,
      `@preview/${p.name}:${p.version}`,
      dir,
    ])
  const header =
    `// Typst Universe template @preview/${p.name}:${p.version}, ${p.entrypoint}.\n` +
    `// By its authors, ${p.license} (https://typst.app/universe/package/${p.name}).\n`
  writeFileSync(
    `${root}test/universe/corpus/${p.name}.typ`,
    // Line ends as git checks them out.
    header + readFileSync(`${dir}/${p.entrypoint}`, 'utf8').replaceAll('\r\n', '\n').trimEnd() + '\n',
  )
}
console.log(`extracted ${packages.length} templates into test/universe/corpus/`)
