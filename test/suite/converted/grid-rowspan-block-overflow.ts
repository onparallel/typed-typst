// Converted from test/suite/corpus/grid-rowspan-block-overflow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, inline, m, page, pct, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(7) }),
      inline(
        table(
          { columns: 3 },
          inline(),
          inline(),
          table.cell({ breakable: true, rowspan: 2 }, block({ width: em(2), height: pct(100), fill: red })),
          table.cell({ breakable: false }, block({ width: em(2), height: pct(100), fill: red })),
          table.cell({ breakable: false, rowspan: 2 }, block({ width: em(2), height: pct(100), fill: red })),
        ),
      ),
    ),
  )
}
