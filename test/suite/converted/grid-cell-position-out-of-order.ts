// Converted from test/suite/corpus/grid-cell-position-out-of-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`A`,
        inline`B`,
        grid.cell({ x: 1, y: 2 }, inline`C`),
        grid.cell({ x: 0, y: 2 }, inline`D`),
        grid.cell({ x: 1, y: 1 }, inline`E`),
        grid.cell({ x: 0, y: 1 }, inline`F`),
      ),
    ),
  )
}
