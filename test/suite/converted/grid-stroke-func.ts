// Converted from test/suite/corpus/grid-stroke-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assume, blue, calc, data, doc, grid, inline, pt, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        {
          columns: 3,
          inset: pt(3),
          stroke: (x, unused) => ({
            right: data([pt(5), { dash: 'dotted' }]).at(assume<'int'>(calc.rem(x, 2))),
            bottom: { dash: 'densely-dotted' },
          }),
        },
        grid.vline({ x: 0, stroke: red }),
        grid.vline({ x: 1, stroke: red }),
        grid.vline({ x: 2, stroke: red }),
        grid.vline({ x: 3, stroke: red }),
        grid.hline({ y: 0, end: 1, stroke: blue }),
        grid.hline({ y: 1, end: 1, stroke: blue }),
        grid.cell(inline`a`),
        inline`b`,
        inline`c`,
      ),
    ),
  )
}
