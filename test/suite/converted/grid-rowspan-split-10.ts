// Converted from test/suite/corpus/grid-rowspan-split-10.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, block, blue, doc, em, inline, m, page, set, table, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(6) }),
      inline(
        table(
          {
            rows: add(add(times([em(4)], 7), [auto]), times([em(4)], 7)),
            columns: 2,
            columnGutter: em(1),
            rowGutter: times([em(1), em(2)], 4),
            fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { green } else { green.darken(40%) }`,
          },
          table.cell({ rowspan: 15 }, block({ fill: blue, width: em(2), height: add(times(em(4), 14), em(3)) })),
          times(inline(), 15),
        ),
      ),
    ),
  )
}
