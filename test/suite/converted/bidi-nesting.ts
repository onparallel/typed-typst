// Converted from test/suite/corpus/bidi-nesting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, rtl, set, symbol, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { dir: rtl }), inline`א${symbol('\u{2066}')}A${symbol('\u{2067}')}Bב${symbol('\u{2069}')}?`),
  )
}
