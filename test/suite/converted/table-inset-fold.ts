// Converted from test/suite/corpus/table-inset-fold.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pt, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(table, { inset: pt(10) }), set(table, { inset: { left: pt(0) } })),
    inline(table({ fill: red, inset: { right: pt(0) } }, table.cell({ inset: { top: pt(0) } }, inline`a`))),
  )
}
