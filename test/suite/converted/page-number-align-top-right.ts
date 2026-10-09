// Converted from test/suite/corpus/page-number-align-top-right.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, block, doc, inline, page, pct, pt, right, set, top } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(100), margin: pt(30), numbering: '(1)', numberAlign: add(top, right) }),
    inline(block({ width: pct(100), height: pct(100), fill: aqua.lighten(pct(50)) })),
  )
}
