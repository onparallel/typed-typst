// Converted from test/suite/corpus/table-cell-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, center, doc, inline, left, m, pt, right, set, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(table.cell, { align: center }),
      show(table.cell, (it, ctx) => [it.align, it.fill, it.inset]),
      set(table.cell, { inset: pt(20) }),
      inline(
        table(
          { align: left, rowGutter: pt(5) },
          inline`A`,
          table.cell({ align: right }, inline`B`),
          table.cell({ fill: aqua }, inline`B`),
        ),
      ),
    ),
  )
}
