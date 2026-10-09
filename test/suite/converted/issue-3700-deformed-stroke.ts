// Converted from test/suite/corpus/issue-3700-deformed-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, mm, pct, pt, rect, rgb } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(rect({ radius: mm(1), width: pct(100), height: pt(10), stroke: { left: add(rgb('46b3c2'), mm(16)) } })),
  )
}
