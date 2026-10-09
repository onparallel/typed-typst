// Converted from test/suite/corpus/math-frac-tan-sin-cos.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`tan(x) = sin(x) / cos(x) \\
  tan x = (sin x) / (cos x)`),
  )
}
