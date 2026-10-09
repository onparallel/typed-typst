// Converted from test/suite/corpus/grid-header-multiple-unordered.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(4) }),
      inline(
        grid(
          grid.header(grid.cell({ x: 0, y: 4 }, inline`y`)),
          grid.header(inline`x`),
          inline`a`,
          inline`b`,
          inline`c`,
          inline`d`,
          inline`e`,
          inline`f`,
        ),
      ),
    ),
  )
}
