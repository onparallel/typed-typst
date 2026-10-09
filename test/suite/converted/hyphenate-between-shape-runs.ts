// Converted from test/suite/corpus/hyphenate-between-shape-runs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(80) }), set(text, { hyphenate: true }), inline`It's a ${emph(inline`Tree`)}beard.`),
  )
}
