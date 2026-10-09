// Converted from test/suite/corpus/circle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, em, inline, ltr, stack } from '../../../src/index.ts'

export default () => {
  return doc(inline(stack({ dir: ltr, spacing: em(0.5) }, circle(), circle(inline`Hey`))))
}
