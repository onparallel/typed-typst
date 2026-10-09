// Converted from test/suite/corpus/math-attach-postscripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`f_x + t^b + V_1^2 + attach(A, t: alpha, b: beta)`))
}
