// Converted from test/suite/corpus/table-tags-unstable-functions.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pdf, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`pdf.table-summary(
  summary: "The table summary",
  table(
    columns: 2,
    // Exclude the top-left cell from being a header cell.
    table.header(pdf.data-cell[], [Column header]),
    pdf.header-cell(scope: "row")[Row header], [thing]
  )
)`),
  )
}
