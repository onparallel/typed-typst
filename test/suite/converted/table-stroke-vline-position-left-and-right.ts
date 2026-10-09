// Converted from test/suite/corpus/table-stroke-vline-position-left-and-right.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, green, inline, left, pt, red, right, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3, inset: pt(5) },
        table.vline({ stroke: green, position: left }),
        table.vline({ stroke: red, position: right }),
        inline`a`,
        table.vline({ stroke: pt(2), position: left }),
        table.vline({ stroke: red, position: right }),
        inline`b`,
        table.vline({ stroke: pt(2), position: left }),
        table.vline({ stroke: red, position: right }),
        inline`c`,
        table.vline({ stroke: pt(2), position: left }),
      ),
    ),
    inline(
      table(
        { columns: 3, inset: pt(5), gutter: pt(3) },
        table.vline({ stroke: green, position: left }),
        table.vline({ stroke: red, position: right }),
        inline`a`,
        table.vline({ stroke: blue, position: left }),
        table.vline({ stroke: red, position: right }),
        inline`b`,
        table.vline({ stroke: blue, position: left }),
        table.vline({ stroke: red, position: right }),
        inline`c`,
        table.vline({ stroke: pt(2), position: left }),
      ),
    ),
  )
}
