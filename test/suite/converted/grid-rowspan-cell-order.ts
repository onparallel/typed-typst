// Converted from test/suite/corpus/grid-rowspan-cell-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  aqua,
  codeBlock,
  context,
  counter,
  doc,
  em,
  grid,
  inline,
  let_,
  m,
  show,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [countDecl, count] = let_('count', counter('count'))
  return doc(
    m.lines(
      countDecl,
      show(grid.cell, (it, ctx) => codeBlock([count.step(), context((ctx_2) => count.display(ctx_2))])),
    ),
    inline(
      grid(
        {
          columns: times([em(2)], 3),
          stroke: aqua,
          rows: em(1.2),
          fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { red } else { orange }`,
        },
        inline`a`,
        grid.cell({ rowspan: 2 }, inline`b`),
        grid.cell({ rowspan: 2 }, inline`c`),
        inline`d`,
        grid.cell({ rowspan: 2 }, inline`f`),
        inline`g`,
        inline`h`,
        inline`i`,
        inline`j`,
        inline`k`,
        inline`l`,
        inline`m`,
        grid.cell({ rowspan: 2 }, inline`n`),
        inline`o`,
        inline`p`,
        inline`q`,
        inline`r`,
        inline`s`,
        inline`t`,
        inline`u`,
      ),
    ),
  )
}
