// Converted from test/suite/corpus/footnote-multiple-in-one-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, m, page, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(100) }), inline`${v(pt(50))} A ${footnote(inline`a`)} B ${footnote(inline`b`)}`),
  )
}
