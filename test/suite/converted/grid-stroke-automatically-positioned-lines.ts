// Converted from test/suite/corpus/grid-stroke-automatically-positioned-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, blue, doc, green, inline, pt, red, table, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3 },
        table.hline({ stroke: add(red, pt(5)) }),
        table.vline({ stroke: add(blue, pt(5)) }),
        table.vline({ stroke: pt(2) }),
        inline`a`,
        table.vline({ x: 1, stroke: add(aqua, pt(5)) }),
        inline`b`,
        table.vline({ stroke: add(aqua, pt(5)) }),
        inline`c`,
        table.vline({ stroke: add(yellow, pt(5.2)) }),
        table.hline({ stroke: add(green, pt(5)) }),
        inline`a`,
        inline`b`,
        inline`c`,
        inline`a`,
        table.hline({ stroke: add(green, pt(2)) }),
        table.vline({ stroke: pt(2) }),
        inline`b`,
        inline`c`,
      ),
    ),
  )
}
