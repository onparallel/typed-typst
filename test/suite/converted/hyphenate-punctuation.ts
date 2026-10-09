// Converted from test/suite/corpus/hyphenate-punctuation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, h, inline, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(60) }), set(text, { hyphenate: true }), inline`${h(pt(6))} networks, the rest.`),
  )
}
