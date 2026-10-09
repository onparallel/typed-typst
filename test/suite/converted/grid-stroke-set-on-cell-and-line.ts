// Converted from test/suite/corpus/grid-stroke-set-on-cell-and-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blue, bottom, doc, end, inline, m, pt, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(table.cell, { stroke: pt(4) }),
      set(table.cell, { stroke: blue }),
      set(table.hline, { stroke: red }),
      set(table.hline, { stroke: pt(0.75) }),
      set(table.vline, { stroke: pt(0.75) }),
      set(table.vline, { stroke: aqua }),
    ),
    inline(
      table(
        { columns: 3, gutter: pt(3), inset: pt(5) },
        inline`a`,
        inline`b`,
        table.vline({ position: end }),
        inline`c`,
        inline`d`,
        inline`e`,
        inline`f`,
        table.hline({ position: bottom }),
        inline`g`,
        inline`h`,
        inline`i`,
      ),
    ),
  )
}
