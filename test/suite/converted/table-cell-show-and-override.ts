// Converted from test/suite/corpus/table-cell-show-and-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, left, m, pt, right, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(table.cell, (it, ctx) => [it.align, it.fill]),
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
