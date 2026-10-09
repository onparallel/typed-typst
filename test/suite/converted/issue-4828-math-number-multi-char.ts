// Converted from test/suite/corpus/issue-4828-math-number-multi-char.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math`1/2(x)`} vs. ${unsafeRaw.math`1/10(x)`}`)
}
