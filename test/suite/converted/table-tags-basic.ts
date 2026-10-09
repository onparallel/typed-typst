// Converted from test/suite/corpus/table-tags-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3 },
        table.header(inline`H1`, inline`H2`, inline`H3`),
        inline`a1`,
        inline`a2`,
        inline`a3`,
        inline`b1`,
        inline`b2`,
        inline`b3`,
      ),
    ),
  )
}
