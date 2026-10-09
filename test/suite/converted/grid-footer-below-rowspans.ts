// Converted from test/suite/corpus/grid-footer-below-rowspans.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { margin: pt(2) }),
      set(text, { size: pt(6) }),
      inline(
        table(
          { columns: 2, inset: pt(1.5) },
          table.cell({ rowspan: 2 }, inline`a`),
          table.cell({ rowspan: 2 }, inline`b`),
          table.footer(),
        ),
      ),
    ),
  )
}
