// Converted from test/suite/corpus/grid-rowspan-fixed-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        grid(
          {
            columns: 2,
            rows: em(1.5),
            fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { blue.lighten(50%) } else { blue.lighten(10%) }`,
          },
          grid.cell({ rowspan: 3 }, inline`R1`),
          inline`b`,
          inline`c`,
          inline`d`,
          inline`e`,
          inline`f`,
          grid.cell({ rowspan: 5 }, inline`R2`),
          inline`h`,
          inline`i`,
          inline`j`,
          inline`k`,
          inline`l`,
          inline`m`,
          inline`n`,
        ),
      ),
    ),
  )
}
