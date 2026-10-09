// Converted from test/suite/corpus/issue-8520-script-stylistic-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`cal(B) cal(L) cal(P) cal(R)`,
      space,
      show(math.equation, set(text, { weight: 400 })),
      space,
      unsafeRaw.math.block`cal(B) cal(L) cal(P) cal(R)`,
    ),
  )
}
