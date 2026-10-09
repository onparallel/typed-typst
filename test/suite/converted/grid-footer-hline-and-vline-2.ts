// Converted from test/suite/corpus/grid-footer-hline-and-vline-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, m, page, pt, red, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: pt(2) }),
      set(text, { size: pt(6) }),
      inline(
        table(
          { columns: 3, inset: pt(1.5) },
          table.footer(
            table.cell({ y: 0 }, inline`a`),
            table.hline({ stroke: red }),
            table.hline({ y: 1, stroke: aqua }),
            table.cell({ y: 0 }, inline`b`),
            inline`c`,
          ),
        ),
      ),
    ),
  )
}
