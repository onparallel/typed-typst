// Converted from test/suite/corpus/math-equation-number-align-multiline-bottom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, bottom, doc, inline, left, m, math, set, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(align, { alignment: left })),
      set(math.equation, { numbering: '(1)', numberAlign: bottom }),
    ),
    inline(
      unsafeRaw.math.block`p &= ln a b \\
    &= ln a + ln b`,
      space,
      unsafeRaw.math.block`q &= sum_k ln A \\
    &= sum_k k ln a`,
    ),
  )
}
