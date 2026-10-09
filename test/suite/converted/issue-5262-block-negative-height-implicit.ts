// Converted from test/suite/corpus/issue-5262-block-negative-height-implicit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(10), margin: { top: pt(9) } }), inline(block({ height: pct(100) }, inline()))),
  )
}
