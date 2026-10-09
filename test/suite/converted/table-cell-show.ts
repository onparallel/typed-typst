// Converted from test/suite/corpus/table-cell-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blue, doc, horizon, inline, left, linebreak, red, right, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    show(table.cell, (it, ctx) => inline`Zz`),
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
      ),
    ),
  )
}
