// Converted from test/suite/corpus/issue-5160-unbreakable-pad.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, block, doc, inline, m, pad, pct, pt, right, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(block, { breakable: false }),
      inline(block({ width: pct(100) }, pad({ x: pt(20) }, align(right, inline`A`)))),
    ),
  )
}
