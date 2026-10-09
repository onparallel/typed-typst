// Converted from test/suite/corpus/math-frac-skewed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.frac, { style: 'skewed' }), inline(unsafeRaw.math.block`a / b,  a / (b / c)`)))
}
