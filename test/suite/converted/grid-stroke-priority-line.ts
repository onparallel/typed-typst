// Converted from test/suite/corpus/grid-stroke-priority-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, blue, doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2, inset: pt(2) },
        grid.hline({ y: 2, stroke: add(red, pt(5)) }),
        grid.vline(),
        inline`a`,
        inline`b`,
        grid.hline({ stroke: red }),
        grid.hline({ stroke: null }),
        inline`c`,
        grid.cell({ stroke: { top: aqua } }, inline`d`),
        grid.hline({ stroke: blue }),
      ),
    ),
  )
}
