// Converted from test/suite/corpus/grid-stroke-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blue, doc, green, grid, inline, m, pt, red, set, stroke } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(grid, { stroke: red }), set(grid, { stroke: pt(5) })),
    inline(
      grid(
        { inset: pt(10), columns: 2, stroke: stroke({ dash: 'loosely-dotted' }) },
        grid.vline({ start: 2, end: 3, stroke: { paint: green, dash: null } }),
        inline`a`,
        inline`b`,
        grid.hline({ end: 1, stroke: blue }),
        inline`c`,
        inline`d`,
        inline`e`,
        grid.cell({ stroke: aqua }, inline`f`),
      ),
    ),
  )
}
