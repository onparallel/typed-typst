// Converted from test/suite/corpus/math-attach-subscript-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`sum_(n in NN \\ n <= 5) n = (5(5+1))/2 = 15`))
}
