// Converted from test/suite/corpus/math-lr-unbalanced.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`1/(2 (x)`,
      space,
      unsafeRaw.math.block`1_(2 y (x) ()`,
      space,
      unsafeRaw.math.block`1/(2 y (x) (2(3))`,
    ),
  )
}
