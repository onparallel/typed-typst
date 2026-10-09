// Converted from test/suite/corpus/grid-cell-various-overrides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, center, doc, grid, inline, left, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2, fill: red, align: left, inset: pt(5) },
        inline`ABC`,
        inline`ABC`,
        grid.cell({ fill: blue }, inline`C`),
        inline`D`,
        grid.cell({ align: center }, inline`E`),
        inline`F`,
        inline`G`,
        grid.cell({ inset: pt(0) }, inline`H`),
      ),
    ),
  )
}
