// Converted from test/suite/corpus/grid-stroke-hline-rowspan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, pt, red, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(6) }),
      inline(
        table(
          { rows: em(1), columns: 2, inset: pt(1.5) },
          table.cell({ rowspan: 3 }, inline`a`),
          table.cell({ rowspan: 2 }, inline`b`),
          table.hline({ stroke: red }),
          inline`c`,
        ),
      ),
    ),
  )
}
