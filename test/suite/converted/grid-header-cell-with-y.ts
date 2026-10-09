// Converted from test/suite/corpus/grid-header-cell-with-y.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(grid.cell({ y: 1 }, inline`a`), grid.header(grid.cell({ y: 0 }, inline`b`)), grid.cell({ y: 2 }, inline`c`)),
    ),
  )
}
