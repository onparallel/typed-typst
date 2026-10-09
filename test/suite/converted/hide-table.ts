// Converted from test/suite/corpus/hide-table.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, hide, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hidden: ${hide(table({ rows: 2, columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`))}
${table({ rows: 2, columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`)}`)
}
