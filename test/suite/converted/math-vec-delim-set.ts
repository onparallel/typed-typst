// Converted from test/suite/corpus/math-vec-delim-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.vec, { delim: '[' }), inline(unsafeRaw.math.block`vec(1, 2)`)))
}
