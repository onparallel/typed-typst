// Converted from test/suite/corpus/list-baseline-math-fraction.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item([unsafeRaw.math.block`(7 "O1" + 3 (display((sum_(i = 5)^8 L_i)/4)))/10`])))
}
