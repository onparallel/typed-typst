// Converted from test/suite/corpus/footnote-block-at-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, footnote, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(50) }), inline`A ${block(footnote(inline`hello`))}`))
}
