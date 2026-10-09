// Converted from test/suite/corpus/grid-cell-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, center, doc, grid, inline, left, m, pt, right, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(grid.cell, { align: center }),
      show(grid.cell, (it, ctx) => [it.align, it.fill, it.inset]),
      set(grid.cell, { inset: pt(20) }),
      inline(
        grid(
          { align: left, rowGutter: pt(5) },
          inline`A`,
          grid.cell({ align: right }, inline`B`),
          grid.cell({ fill: aqua }, inline`B`),
        ),
      ),
    ),
  )
}
