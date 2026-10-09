// Converted from test/suite/corpus/issue-6666-auto-hlines-around-header.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, doc, emph, inline, pt, red, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 2 },
        table.hline({ stroke: add(pt(2), blue) }),
        table.header(inline(strong(inline`foo`)), inline(strong(inline`bar`))),
        table.hline({ stroke: add(pt(1.5), red) }),
        table.cell({ colspan: 2 }, inline(emph(inline`asdf`))),
        table.hline({ stroke: add(pt(1.5), red) }),
        inline`a`,
        inline`b`,
        inline`c`,
        inline`d`,
      ),
    ),
  )
}
