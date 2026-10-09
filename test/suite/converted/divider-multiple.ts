// Converted from test/suite/corpus/divider-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { divider, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { width: pt(200) }), inline`Section 1 ${divider()} Section 2 ${divider()} Section 3`))
}
