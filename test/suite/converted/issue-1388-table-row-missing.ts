// Converted from test/suite/corpus/issue-1388-table-row-missing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, range, set, spread, str, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(70) }), inline(table({ rows: pt(16) }, spread(range(6).map(str).flatten())))),
  )
}
