// Converted from test/suite/corpus/grid-stroke-priority-line-cell.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blue, doc, end, inline, pt, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3, stroke: aqua },
        table.vline({ stroke: red, position: end }),
        inline`a`,
        table.vline({ stroke: red }),
        inline`b`,
        inline`c`,
        table.cell({ stroke: blue }, inline`d`),
        inline`e`,
        inline`f`,
        table.hline({ stroke: red }),
        inline`g`,
        table.cell({ stroke: blue }, inline`h`),
        inline`i`,
      ),
    ),
    inline(
      table(
        { columns: 3, gutter: pt(3), stroke: aqua },
        table.vline({ stroke: red, position: end }),
        inline`a`,
        table.vline({ stroke: red }),
        inline`b`,
        inline`c`,
        table.cell({ stroke: blue }, inline`d`),
        inline`e`,
        inline`f`,
        table.hline({ stroke: red }),
        inline`g`,
        table.cell({ stroke: blue }, inline`h`),
        inline`i`,
      ),
    ),
  )
}
