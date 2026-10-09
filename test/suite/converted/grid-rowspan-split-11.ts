// Converted from test/suite/corpus/grid-rowspan-split-11.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, set, space, table, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(6) }),
      inline(
        table(
          {
            rows: times([em(3)], 15),
            columns: 2,
            columnGutter: em(1),
            rowGutter: times([em(1), em(2)], 4),
            fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { aqua } else { blue }`,
          },
          table.cell({ breakable: true, rowspan: 15 }, times(inline`a ${linebreak()}${space}`, 15)),
          times(inline(), 15),
        ),
      ),
    ),
  )
}
