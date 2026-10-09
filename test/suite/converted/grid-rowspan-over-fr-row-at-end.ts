// Converted from test/suite/corpus/grid-rowspan-over-fr-row-at-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, block, doc, em, fr, grid, inline, m, orange, page, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        grid(
          { fill: red, gutter: pt(3), columns: 3, rows: [em(1), auto, fr(1)] },
          inline`a`,
          inline`b`,
          grid.cell({ rowspan: 3 }, block({ height: em(4), width: em(1), fill: orange })),
          inline`c`,
          inline`d`,
          inline`e`,
          inline`f`,
        ),
      ),
    ),
  )
}
