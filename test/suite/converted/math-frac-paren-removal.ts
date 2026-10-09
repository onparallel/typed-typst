// Converted from test/suite/corpus/math-frac-paren-removal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`(|x| + |y|)/2 < [1+2]/3`))
}
