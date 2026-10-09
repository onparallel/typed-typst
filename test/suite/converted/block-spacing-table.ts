// Converted from test/suite/corpus/block-spacing-table.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, pt, set, show, table, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(block, { spacing: pt(100) }),
      show(table, set(block, { above: pt(5), below: pt(5) })),
      inline`Hello ${table({ columns: 4, fill: (x, y) => unsafeRaw.code<any>`if calc.odd(x + y) { silver }` }, inline`A`, inline`B`, inline`C`, inline`D`)}`,
    ),
  )
}
