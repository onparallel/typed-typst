// Converted from test/suite/corpus/grid-header-rowbreak-auto-pos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`x`,
        grid.hline({ stroke: red }),
        grid.header(inline`a`),
        grid.hline({ stroke: pt(3) }),
        inline`y`,
        grid.header(),
        inline`z`,
      ),
    ),
  )
}
