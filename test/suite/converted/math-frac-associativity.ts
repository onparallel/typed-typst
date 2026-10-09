// Converted from test/suite/corpus/math-frac-associativity.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`1/2/3 = (1/2)/3 = 1/(2/3)`))
}
