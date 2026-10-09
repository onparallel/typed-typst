// Converted from test/suite/corpus/math-font-features.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`nothing`,
      space,
      unsafeRaw.math.block`"hi ∅ hey"`,
      space,
      unsafeRaw.math.block`sum_(i in NN) 1 + i`,
      space,
      show(math.equation, set(text, { features: ['cv02'], fallback: false })),
      space,
      unsafeRaw.math.block`nothing`,
      space,
      unsafeRaw.math.block`"hi ∅ hey"`,
      space,
      unsafeRaw.math.block`sum_(i in NN) 1 + i`,
    ),
  )
}
