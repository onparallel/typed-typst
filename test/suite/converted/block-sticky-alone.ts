// Converted from test/suite/corpus/block-sticky-alone.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(50) }), inline(block({ sticky: true }, inline`A`))))
}
