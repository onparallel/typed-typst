// Converted from test/suite/corpus/page-number-align-bottom-left.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, block, bottom, doc, inline, left, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(100), margin: pt(30), numbering: '[1]', numberAlign: add(bottom, left) }),
    inline(block({ width: pct(100), height: pct(100), fill: aqua.lighten(pct(50)) })),
  )
}
