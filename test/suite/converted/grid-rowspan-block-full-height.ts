// Converted from test/suite/corpus/grid-rowspan-block-full-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, block, doc, em, fr, inline, m, page, pct, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(9) }),
      inline(
        table(
          { rows: [em(1), em(1), fr(1), fr(1), auto] },
          table.cell({ rowspan: 2 }, block({ width: em(2), height: pct(100), fill: red })),
          table.cell({ rowspan: 2 }, block({ width: em(2), height: pct(100), fill: red })),
          inline`a`,
        ),
      ),
    ),
  )
}
