// Converted from test/suite/corpus/math-equation-number-align-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    set(math.equation, { numbering: '(1)' }),
    inline(unsafeRaw.math.block`p &= ln a b \\
    &= ln a + ln b`),
  )
}
