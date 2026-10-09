// Converted from test/suite/corpus/grid-footer-cell-with-y.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(grid.footer(grid.cell({ y: 2 }, inline`b`)), grid.cell({ y: 0 }, inline`a`), grid.cell({ y: 1 }, inline`c`)),
    ),
  )
}
