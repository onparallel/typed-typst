// Converted from test/suite/corpus/table-tags-column-and-row-header.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pdf, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3 },
        table.header(inline`H1`, inline`H2`, inline`H3`),
        unsafeRaw.code<any>`pdf.header-cell(scope: "row")[10:00]`,
        inline`a2`,
        inline`a3`,
        unsafeRaw.code<any>`pdf.header-cell(scope: "row")[12:30]`,
        inline`b2`,
        inline`b3`,
      ),
    ),
  )
}
