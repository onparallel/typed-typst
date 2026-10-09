// Converted from test/suite/corpus/math-mat-vec-cases-unity.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(z_(n_p); a^2)
  vec(z_(n_p), a^2)
  cases(reverse: #true, delim: \\(, z_(n_p), a^2)
  cases(delim: \\(, z_(n_p), a^2)`),
  )
}
