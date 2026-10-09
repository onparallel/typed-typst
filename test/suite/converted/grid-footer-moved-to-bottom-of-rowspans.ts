// Converted from test/suite/corpus/grid-footer-moved-to-bottom-of-rowspans.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2, stroke: red, inset: pt(5) },
        inline`a`,
        inline(),
        inline`b`,
        inline(),
        grid.cell({ x: 1, y: 3, rowspan: 4 }, inline`b`),
        grid.cell({ y: 2, rowspan: 2 }, inline`a`),
        grid.footer(),
        grid.cell({ y: 4 }, inline`d`),
        grid.cell({ y: 5 }, inline`e`),
        grid.cell({ y: 6 }, inline`f`),
      ),
    ),
  )
}
