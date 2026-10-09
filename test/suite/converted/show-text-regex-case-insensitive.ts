// Converted from test/suite/corpus/show-text-regex-case-insensitive.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, regex, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(regex('(?i)rust'), (it, ctx) => inline`${it} (🚀)`),
      inline`Rust is memory-safe and blazingly fast. Let's rewrite everything in rust.`,
    ),
  )
}
