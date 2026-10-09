// Converted from test/suite/corpus/issue-1398-line-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, inline, line, pct, rect, right, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(align(right, line({ length: pct(30) })), space, align(right, rect())))
}
