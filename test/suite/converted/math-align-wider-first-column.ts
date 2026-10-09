// Converted from test/suite/corpus/math-align-wider-first-column.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`x + 1 &= a^2 + b^2 \\
      y &= a + b^2 \\
      z &= alpha dot beta`),
  )
}
