// Converted from test/suite/corpus/grid-header-cell-with-x.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { black, doc, grid, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2, stroke: black, inset: pt(5) },
        grid.header(grid.cell({ x: 0 }, inline`b1`), grid.cell({ x: 0 }, inline`b2`)),
        grid.cell({ x: 1 }, inline`c`),
      ),
    ),
  )
}
