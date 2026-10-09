// Converted from test/suite/corpus/grid-header-not-at-the-top.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, space, strong, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        v(em(2)),
        space,
        grid(inline`a`, inline`b`, grid.header(inline(strong(inline`Abc`))), inline`d`, inline`e`, inline`f`),
      ),
    ),
  )
}
