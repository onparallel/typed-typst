// Converted from test/suite/corpus/issue-2591-single-weak-pagebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pagebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline(pagebreak({ weak: true })))
}
