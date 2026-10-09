// Converted from test/suite/corpus/grid-header-rowbreak-auto-and-fixed-pos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`a`,
        grid.header(inline`x`),
        inline`b`,
        grid.header(grid.cell({ x: 0, y: 3 }, inline`y`)),
        inline`c`,
      ),
    ),
  )
}
