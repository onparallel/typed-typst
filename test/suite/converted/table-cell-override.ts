// Converted from test/suite/corpus/table-cell-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blue, doc, horizon, inline, left, linebreak, pt, red, right, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { align: left, fill: red, stroke: blue, columns: 2 },
        inline`AAAAA`,
        inline`BBBBB`,
        inline`A`,
        inline`B`,
        table.cell({ align: right }, inline`C`),
        inline`D`,
        align(right, inline`E`),
        inline`F`,
        align(horizon, inline`G`),
        inline`A${linebreak()} A${linebreak()} A`,
        table.cell({ align: horizon }, inline`G2`),
        inline`A${linebreak()} A${linebreak()} A`,
        table.cell({ inset: pt(0) }, inline`I`),
        inline`F`,
        inline`H`,
        table.cell({ fill: blue }, inline`J`),
      ),
    ),
  )
}
