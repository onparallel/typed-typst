// Converted from test/suite/corpus/grid-rowspan-split-9.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  doc,
  em,
  inline,
  linebreak,
  m,
  page,
  set,
  space,
  table,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

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
            fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { orange.lighten(20%) } else { red }`,
          },
          table.cell({ rowspan: 15 }, times(inline`a ${linebreak()}${space}`, 15)),
          times(inline(), 15),
        ),
      ),
    ),
  )
}
