// Converted from test/suite/corpus/math-attach-force-scripts-and-limits.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`limits(A)_1^2 != A_1^2`,
      space,
      unsafeRaw.math.block`scripts(sum)_1^2 != sum_1^2`,
      space,
      unsafeRaw.math.block`limits(integral)_a^b != integral_a^b`,
    ),
  )
}
