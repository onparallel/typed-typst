// Converted from test/suite/corpus/grid-header-rowbreak-mixed-pos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`a`,
        grid.header(inline`x`, grid.cell({ x: 0 }, inline`b`)),
        inline`c`,
        grid.hline({ stroke: red }),
        grid.header(inline`y`, grid.cell({ x: 0, y: 8 }, inline`d`)),
        grid.hline({ stroke: pt(3) }),
        inline`e`,
      ),
    ),
  )
}
