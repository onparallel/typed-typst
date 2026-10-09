// Converted from test/suite/corpus/math-lr-mid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`{ x mid(|) sum_(i=1)^oo phi_i (x) < 1 } \\
  { integral |dot|
      mid(bar.v.double)
    floor(hat(I) mid(slash) { dot mid(|) dot } mid(|) I/n) }`),
  )
}
