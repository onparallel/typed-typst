// Converted from test/suite/corpus/math-frac-horizontal-explicit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(math.frac, { style: 'horizontal' }), inline(unsafeRaw.math.block`frac(a, (b + c)), frac(a, b + c)`)),
  )
}
