// Converted from test/suite/corpus/math-equation-number-align-multiline-top-start.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, math, set, space, start, top, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    set(math.equation, { numbering: '(1)', numberAlign: add(top, start) }),
    inline(
      unsafeRaw.math.block`p &= ln a b \\
    &= ln a + ln b`,
      space,
      unsafeRaw.math.block`q &= sum_k k ln a \\
    &= sum_k ln A`,
    ),
  )
}
