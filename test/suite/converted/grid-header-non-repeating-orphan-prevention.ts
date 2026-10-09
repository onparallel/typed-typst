// Converted from test/suite/corpus/grid-header-non-repeating-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, space, strong, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        v(em(2)),
        space,
        grid(grid.header({ repeat: false }, inline(strong(inline`Abc`))), inline`a`, inline`b`, inline`c`, inline`d`),
      ),
    ),
  )
}
