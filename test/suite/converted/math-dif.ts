// Converted from test/suite/corpus/math-dif.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`(dif y)/(dif x), dif/x, x/dif, dif/dif \\
  frac(dif y, dif x), frac(dif, x), frac(x, dif), frac(dif, dif)`),
  )
}
