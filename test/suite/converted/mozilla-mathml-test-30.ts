// Converted from test/suite/corpus/mozilla-mathml-test-30.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`det(A) = sum_(sigma in S_n) epsilon.alt(sigma) product_(i = 1)^n a_(i, sigma_i)`),
  )
}
