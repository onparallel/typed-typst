// Converted from test/suite/corpus/issue-5024-spill-backlog.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { columns, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { columns: 2, height: pt(50) }), inline(columns(2, inline`Hello`))))
}
