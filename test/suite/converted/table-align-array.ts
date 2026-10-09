// Converted from test/suite/corpus/table-align-array.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, fr, inline, left, m, right, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(table({ columns: [fr(1), fr(1), fr(1)], align: [left, center, right] }, inline`A`, inline`B`, inline`C`)),
    m.lines(
      set(align, { alignment: center }),
      inline(table({ columns: [fr(1), fr(1), fr(1)], align: [] }, inline`A`, inline`B`, inline`C`)),
    ),
  )
}
