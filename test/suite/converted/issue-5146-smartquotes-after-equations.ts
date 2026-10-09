// Converted from test/suite/corpus/issue-5146-smartquotes-after-equations.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math`i`}'s ${unsafeRaw.math`i`} 's`)
}
