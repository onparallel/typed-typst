#!/usr/bin/env node
// A stand-in for the Typst binary, driven by FAKE_TYPST: it reports what it was given.
import { readFileSync, statSync, writeFileSync } from 'node:fs'
const mode = process.env.FAKE_TYPST
const args = process.argv.slice(2)
const pdf = args[2]
if (mode === 'args') {
  const root = args.find((a) => a.startsWith('--root='))?.slice(7)
  const report = { args, rootMode: (statSync(root).mode & 0o777).toString(8), stdin: readFileSync(0, 'utf8') }
  writeFileSync(pdf, '%PDF-fake')
  writeFileSync(process.env.FAKE_REPORT, JSON.stringify(report))
} else if (mode === 'exit-early') {
  // Exits without reading the source: writing to its stdin fails with EPIPE.
  process.stderr.write('error: unexpected argument\n')
  process.exit(2)
} else if (mode === 'flood') {
  const chunk = 'warning: x\n'.repeat(100_000)
  for (let i = 0; i < 80; i++) process.stderr.write(chunk)
  setInterval(() => {}, 1000)
} else if (mode === 'lie') {
  // Says error but exits 0: `ok` follows the exit code.
  writeFileSync(pdf, '%PDF-fake')
  process.stderr.write('error: not really\n')
}
