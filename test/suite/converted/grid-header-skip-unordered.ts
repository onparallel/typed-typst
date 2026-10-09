// Converted from test/suite/corpus/grid-header-skip-unordered.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`a`,
        grid.header(grid.cell({ x: 0, y: 2 }, inline`y`)),
        inline`b`,
        grid.header(inline`x`),
        inline`c`,
      ),
    ),
  )
}
