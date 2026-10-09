// Converted from test/suite/corpus/grid-rowspan-split-16.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, black, block, doc, em, grid, inline, m, page, pt, set, unsafeRaw, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(7), margin: { bottom: em(2) } }),
      inline(
        grid(
          {
            columns: 2,
            rows: [em(1), em(1), auto, em(1), em(1), em(1)],
            fill: (x, y) => unsafeRaw.code<any>`if x == 0 { aqua } else { blue }`,
            stroke: black,
            gutter: pt(2),
          },
          grid.cell({ rowspan: 5 }, block({ height: em(10) }, inline`a`)),
          inline`a`,
          inline`b`,
          grid.cell({ breakable: false }, add(v(em(3)), inline`c`)),
          inline`d`,
          inline`e`,
          inline`f`,
          inline`g`,
        ),
      ),
    ),
  )
}
