// Converted from test/suite/corpus/grid-cell-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blue, doc, grid, horizon, inline, left, linebreak, pt, red, right } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { align: left, fill: red, stroke: blue, inset: pt(5), columns: 2 },
        inline`AAAAA`,
        inline`BBBBB`,
        inline`A`,
        inline`B`,
        grid.cell({ align: right }, inline`C`),
        inline`D`,
        align(right, inline`E`),
        inline`F`,
        align(horizon, inline`G`),
        inline`A${linebreak()} A${linebreak()} A`,
        grid.cell({ align: horizon }, inline`G2`),
        inline`A${linebreak()} A${linebreak()} A`,
        grid.cell({ inset: pt(0) }, inline`I`),
        inline`F`,
        inline`H`,
        grid.cell({ fill: blue }, inline`J`),
      ),
    ),
  )
}
