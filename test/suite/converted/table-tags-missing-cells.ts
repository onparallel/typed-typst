// Converted from test/suite/corpus/table-tags-missing-cells.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3 },
        table.header({ level: 1 }, inline`H1`, inline`H1`, inline`H1`),
        table.header({ level: 2 }, inline`H2`, inline`H2`, inline`H2`),
        table.cell({ x: 0 }, inline()),
        table.cell({ x: 2 }, inline()),
        table.header({ level: 2 }, inline`H2`, inline`H2`),
        inline(),
        inline(),
        table.footer(table.cell({ x: 1 }, inline`F`), table.cell({ x: 2 }, inline`F`)),
      ),
    ),
  )
}
