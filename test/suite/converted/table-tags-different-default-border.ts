// Converted from test/suite/corpus/table-tags-different-default-border.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, black, doc, inline, pt, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 2, stroke: add(red, pt(2)) },
        table.hline({ stroke: black }),
        inline`a`,
        inline`b`,
        inline`c`,
        inline`d`,
        inline`e`,
        inline`f`,
        table.hline({ stroke: black }),
      ),
    ),
  )
}
