// Converted from test/suite/corpus/issue-183-table-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, page, pt, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(50) }),
    inline`Hello ${table({ columns: 4 }, inline`1`, inline`2`, inline`3`, inline`4`)}`,
  )
}
