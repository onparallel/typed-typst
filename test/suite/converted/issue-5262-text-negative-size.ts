// Converted from test/suite/corpus/issue-5262-text-negative-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, pt, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(unsafeRaw.markup`#set text(-1pt)`, 'a')
}
