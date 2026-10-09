// Converted from test/suite/corpus/math-accent-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x &= p \\ dot(x) &= v \\ dot.double(x) &= a \\ dot.triple(x) &= j \\ dot.quad(x) &= s`),
  )
}
