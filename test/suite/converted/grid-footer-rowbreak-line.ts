// Converted from test/suite/corpus/grid-footer-rowbreak-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 1 },
        inline`a`,
        grid.hline({ stroke: red }),
        grid.footer(inline`b`),
        grid.hline({ stroke: pt(3) }),
      ),
    ),
  )
}
