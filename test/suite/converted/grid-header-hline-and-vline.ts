// Converted from test/suite/corpus/grid-header-hline-and-vline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, orange, red, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3, stroke: null },
        table.hline({ stroke: red, end: 2 }),
        table.vline({ stroke: red, end: 3 }),
        table.header(
          table.hline({ stroke: aqua, start: 2 }),
          table.vline({ stroke: aqua, start: 3 }),
          inline(strong(inline`A`)),
          table.hline({ stroke: orange }),
          table.vline({ stroke: orange }),
          inline(strong(inline`B`)),
          inline(strong(inline`C`)),
          inline(strong(inline`D`)),
        ),
        inline`a`,
        inline`b`,
        inline`c`,
        inline`d`,
        inline`e`,
        inline`f`,
      ),
    ),
  )
}
