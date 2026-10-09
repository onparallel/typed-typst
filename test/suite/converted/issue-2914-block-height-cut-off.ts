// Converted from test/suite/corpus/issue-2914-block-height-cut-off.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, doc, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(65) }), set(block, { fill: aqua, width: pt(25), height: pt(25), inset: pt(5) })),
    inline(block(inline`A`), space, block(inline`B`)),
  )
}
