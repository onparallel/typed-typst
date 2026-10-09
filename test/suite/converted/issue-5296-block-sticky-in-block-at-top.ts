// Converted from test/suite/corpus/issue-5296-block-sticky-in-block-at-top.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blocks, cm, doc, inline, m, page, set, space, strong, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(3) }),
      inline(
        v(cm(1.6)),
        space,
        block(
          { height: cm(2), breakable: true },
          blocks(inline(block({ sticky: true }, inline(strong(inline`A`)))), 'b'),
        ),
      ),
    ),
  )
}
