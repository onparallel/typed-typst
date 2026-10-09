// Converted from test/suite/corpus/issue-2530-figure-caption-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.code<any>`figure(caption: [test])[].caption`))
}
