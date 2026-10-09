// Converted from test/suite/corpus/grid-footer-top-hlines-with-row-and-auto-pos-cell.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, page, pt, red, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: pt(2) }),
      set(text, { size: pt(6) }),
      inline(
        table(
          { columns: 3, inset: pt(2.5) },
          table.footer(
            table.hline({ stroke: red }),
            table.vline({ stroke: blue }),
            table.cell({ x: 2, y: 2 }, inline`a`),
            inline`b`,
            table.hline({ stroke: pt(3) }),
            table.vline({ stroke: pt(3) }),
          ),
        ),
      ),
    ),
  )
}
