// Converted from test/suite/corpus/list-baseline-table.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pt, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      { tight: false },
      m.item([table({ inset: pt(10), columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`)]),
      m.item([table({ inset: pt(10), columns: 2, stroke: null }, inline`a`, inline`b`, inline`c`, inline`d`)]),
    ),
  )
}
