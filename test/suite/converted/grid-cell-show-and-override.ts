// Converted from test/suite/corpus/grid-cell-show-and-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, grid, inline, left, m, pt, right, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(grid.cell, (it, ctx) => [it.align, it.fill]),
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
