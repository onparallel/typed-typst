// Converted from test/suite/corpus/grid-header-rowbreak-fixed-pos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`z`,
        grid.hline({ stroke: red }),
        grid.header(grid.cell({ x: 0 }, inline`b`)),
        grid.hline({ stroke: pt(3) }),
        inline`w`,
        inline`j`,
        grid.header(grid.cell({ x: 0, y: 9 }, inline`c`)),
        inline`k`,
      ),
    ),
  )
}
