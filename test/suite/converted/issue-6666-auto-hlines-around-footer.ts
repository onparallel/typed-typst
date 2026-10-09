// Converted from test/suite/corpus/issue-6666-auto-hlines-around-footer.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, doc, inline, pt, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 2 },
        table.hline({ stroke: add(pt(2), blue) }),
        table.footer(inline(strong(inline`foo`)), inline(strong(inline`bar`))),
        table.hline({ stroke: pt(8) }),
      ),
    ),
  )
}
