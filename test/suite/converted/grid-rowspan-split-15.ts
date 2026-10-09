// Converted from test/suite/corpus/grid-rowspan-split-15.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, block, doc, em, inline, m, orange, pt, set, show, table, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(10) }),
      show(table.cell, (it, ctx) => unsafeRaw.code<any>`if it.x == 0 { it } else { layout(size => size.height) }`),
      inline(
        table(
          { columns: 2, rows: [em(1), auto, em(2), em(3), em(4)], gutter: pt(3) },
          table.cell({ rowspan: 5 }, block({ fill: orange, height: em(15) }, inline`a`)),
          inline`b`,
          inline`c`,
          inline`d`,
          inline`e`,
          inline`f`,
        ),
      ),
    ),
    inline(
      table(
        { columns: 2, rows: [em(1), auto, em(2), em(3), em(4)], gutter: pt(3) },
        table.cell({ rowspan: 5, breakable: false }, block({ fill: orange, height: em(15) }, inline`a`)),
        inline`b`,
        inline`c`,
        inline`d`,
        inline`e`,
        inline`f`,
      ),
    ),
  )
}
