// Converted from test/suite/corpus/grid-header-rowspan-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, inline, let_, m, page, pct, pt, red, set, table, text } from '../../../src/index.ts'

export default () => {
  const [fullBlockDecl, fullBlock] = let_('full-block', block({ width: em(2), height: pct(100), fill: red }))
  return doc(
    m.lines(
      set(page, { height: em(7) }),
      set(text, { size: pt(6) }),
      fullBlockDecl,
      inline(
        table(
          { columns: 3, inset: pt(1.5) },
          table.header(inline`a`, fullBlock, table.cell({ rowspan: 2 }, fullBlock), inline`b`),
        ),
      ),
    ),
  )
}
