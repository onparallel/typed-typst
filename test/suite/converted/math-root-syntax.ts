// Converted from test/suite/corpus/math-root-syntax.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`√2^3 = sqrt(2^3)`,
      space,
      unsafeRaw.math.block`√(x+y) quad ∛x quad ∜x`,
      space,
      unsafeRaw.math.block`(√2+3) = (sqrt(2)+3)`,
    ),
  )
}
