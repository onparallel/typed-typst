// Converted from test/suite/corpus/grid-rowspan-split-17.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  calc,
  define,
  deg,
  doc,
  em,
  horizon,
  inline,
  m,
  page,
  rotate,
  set,
  show,
  spread,
  strong,
  table,
  times,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const letsRepeat = define('lets-repeat')
    .pos('thing', T.any)
    .pos('n', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`((thing + colbreak(),) * (calc.max(0, n - 1)) + (thing,)).join()`)
  return doc(
    m.lines(
      show(where(table.cell, { x: 0 }), strong),
      show(where(table.cell, { y: 0 }), strong),
      set(page, { height: em(13) }),
      letsRepeat.decl,
      inline(
        table(
          { columns: 4, fill: (x, y) => unsafeRaw.code<any>`if x == 0 or y == 0 { gray }` },
          inline(),
          inline`Test 1`,
          inline`Test 2`,
          inline`Test 3`,
          table.cell(
            { rowspan: 15, align: horizon },
            letsRepeat(rotate({ reflow: true }, deg(-90), inline(strong(inline`All Tests`))), 3),
          ),
          spread(times([inline`123`, inline`456`, inline`789`], 15)),
        ),
      ),
    ),
  )
}
