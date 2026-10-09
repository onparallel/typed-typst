// Converted from test/suite/corpus/list-baseline-multiline-math.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item([
        unsafeRaw.math.block`sum_(i = 1)^n (x_i)^5 &= 0 \\
    y_1 + y_2 &= 10 \\
    (a b c)/x^2 &= 5`,
      ]),
    ),
  )
}
