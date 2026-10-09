// Converted from test/suite/corpus/math-lr-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`1 + (a/b + b \\ = c) + 2`,
      space,
      unsafeRaw.math.block`abs(x + y & 1 & 2 & a + b \\ 3 &&& 4, size: #200%)`,
    ),
  )
}
