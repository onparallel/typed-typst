// Converted from test/suite/corpus/math-vec-gap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.vec, { gap: em(1) }), inline(unsafeRaw.math.block`vec(1, 2)`)))
}
