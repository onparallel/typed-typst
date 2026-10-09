// Converted from test/suite/corpus/table-fill-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, green, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(inline(table({ columns: 3, stroke: null, fill: green }, inline`A`, inline`B`, inline`C`)))
}
