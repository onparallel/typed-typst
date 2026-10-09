// Converted from test/suite/corpus/table-tags-unset-bottom-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(inline(table({ columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`, table.hline({ stroke: null }))))
}
