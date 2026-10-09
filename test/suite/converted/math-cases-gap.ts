// Converted from test/suite/corpus/math-cases-gap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.cases, { gap: em(1) }), inline(unsafeRaw.math.block`x = cases(1, 2)`)))
}
