// Converted from test/suite/corpus/issue-1216-clamp-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pct, pt, red, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(20), margin: pt(0) }),
      inline(v(pt(22)), space, block({ fill: red, width: pct(100), height: pt(10), radius: pt(4) })),
    ),
  )
}
