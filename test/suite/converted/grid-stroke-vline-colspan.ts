// Converted from test/suite/corpus/grid-stroke-vline-colspan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, em, inline, pt, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3, rows: em(1.25), inset: pt(1), stroke: null },
        table.cell({ colspan: 2 }, inline`a`),
        table.vline({ stroke: red }),
        table.hline({ stroke: blue }),
        inline`b`,
        inline`c`,
        inline`d`,
        inline`e`,
        table.cell({ colspan: 3, rowspan: 2 }, inline`a`),
        table.vline({ stroke: blue }),
        table.hline({ stroke: red }),
      ),
    ),
  )
}
