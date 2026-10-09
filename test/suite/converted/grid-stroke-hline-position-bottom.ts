// Converted from test/suite/corpus/grid-stroke-hline-position-bottom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blue, bottom, doc, end, green, inline, pt, red, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3, stroke: blue },
        table.hline({ end: 2, stroke: red }),
        table.hline({ end: 2, stroke: aqua, position: bottom }),
        table.vline({ end: 2, stroke: green }),
        inline`a`,
        table.vline({ end: 2, stroke: green }),
        inline`b`,
        table.vline({ end: 2, stroke: aqua, position: end }),
        table.vline({ end: 2, stroke: green }),
        inline`c`,
        table.vline({ end: 2, stroke: green }),
        table.hline({ end: 2, stroke: pt(5) }),
        inline`d`,
        inline`e`,
        inline`f`,
        table.hline({ end: 2, stroke: red }),
        inline`g`,
        inline`h`,
        inline`i`,
        table.hline({ end: 2, stroke: red }),
      ),
    ),
  )
}
