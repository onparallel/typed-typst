// Converted from test/suite/corpus/issue-1433-footnote-in-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, doc, footnote, inline, m, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(100) }), inline(block({ height: pt(50), width: pct(100), fill: aqua }))),
    m.list(m.item([footnote(inline`1`)]), m.item([footnote(inline`2`)])),
  )
}
