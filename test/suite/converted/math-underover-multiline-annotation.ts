// Converted from test/suite/corpus/math-underover-multiline-annotation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math.block`S = overbrace(beta (alpha) S I, "one line")
    - overbrace(mu (N), "two" \\  "line")`,
      space,
      unsafeRaw.math.block`S = underbrace(beta (alpha) S I, "one line")
    - underbrace(mu (N), "two" \\  "line")`,
    ),
  )
}
