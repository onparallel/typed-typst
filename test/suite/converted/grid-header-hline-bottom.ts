// Converted from test/suite/corpus/grid-header-hline-bottom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pt, set, table, text, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(6) }),
      inline(
        table(
          { columnGutter: pt(3), inset: pt(1) },
          table.header(inline`a`, table.hline({ stroke: yellow })),
          table.cell({ rowspan: 2 }, inline`b`),
        ),
      ),
    ),
  )
}
