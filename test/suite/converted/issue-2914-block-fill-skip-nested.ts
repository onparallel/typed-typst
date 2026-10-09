// Converted from test/suite/corpus/issue-2914-block-fill-skip-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, blue, doc, inline, m, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(50) }),
      inline`A ${block({ fill: aqua, stroke: blue, inset: pt(5), width: pct(100) }, block(inline`B`))}`,
    ),
  )
}
