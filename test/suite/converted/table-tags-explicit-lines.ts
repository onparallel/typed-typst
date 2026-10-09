// Converted from test/suite/corpus/table-tags-explicit-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, green, inline, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 2 },
        inline`a`,
        table.vline({ stroke: green }),
        inline`b`,
        table.hline({ stroke: red }),
        inline`c`,
        inline`d`,
        table.hline({ stroke: blue }),
      ),
    ),
  )
}
