// Converted from test/suite/corpus/grid-footer-hline-and-vline-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, green, inline, m, page, pt, red, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: pt(2) }),
      set(text, { size: pt(6) }),
      inline(
        table(
          { columns: 2, inset: pt(1.5) },
          table.cell({ y: 0 }, inline`a`),
          table.cell({ x: 1, y: 1 }, inline`a`),
          table.cell({ y: 2 }, inline`a`),
          table.footer(table.hline({ stroke: red }), table.vline({ stroke: green }), inline`b`, inline`c`),
        ),
      ),
    ),
  )
}
