// Converted from test/suite/corpus/table-cell-various-overrides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, center, doc, green, inline, pt, right, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 2, fill: green, align: right },
        inline(strong(inline`Name`)),
        inline(strong(inline`Data`)),
        table.cell({ fill: blue }, inline`J.`),
        inline`Organizer`,
        table.cell({ align: center }, inline`K.`),
        inline`Leader`,
        inline`M.`,
        table.cell({ inset: pt(0) }, inline`Player`),
      ),
    ),
  )
}
