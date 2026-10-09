// Converted from test/suite/corpus/issue-5940-text-negative-size-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, m, pt, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(align, { alignment: center }), unsafeRaw.markup`#set text(-10pt)`, 'Hello'))
}
