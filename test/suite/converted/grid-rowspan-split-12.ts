// Converted from test/suite/corpus/grid-rowspan-split-12.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  block,
  doc,
  em,
  fr,
  inline,
  linebreak,
  m,
  page,
  red,
  set,
  spread,
  table,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          {
            gutter: em(0.5),
            columns: 2,
            rows: add(times([em(2)], 10), [auto, auto, em(2), fr(1)]),
            fill: unsafeRaw.code<any>`(_, y) => if calc.even(y) { aqua } else { blue }`,
          },
          table.cell(
            { rowspan: 14 },
            block({ width: em(2), height: add(add(times(em(2), 10), em(2)), em(5)), fill: red }, inline()),
          ),
          spread(times([inline`a`], 5)),
          table.cell({ rowspan: 3 }, inline`a${linebreak()} b`),
          table.cell(
            { rowspan: 5 },
            inline`a${linebreak()} b${linebreak()} c${linebreak()} d${linebreak()} e${linebreak()} f${linebreak()}
g${linebreak()} h`,
          ),
          inline`z`,
        ),
      ),
    ),
  )
}
