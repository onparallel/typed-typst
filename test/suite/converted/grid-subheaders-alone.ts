// Converted from test/suite/corpus/grid-subheaders-alone.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, table } from '../../../src/index.ts'

export default () => {
  return doc(inline(table(table.header(inline`a`), table.header({ level: 2 }, inline`b`))))
}
