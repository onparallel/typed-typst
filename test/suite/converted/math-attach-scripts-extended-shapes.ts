// Converted from test/suite/corpus/math-attach-scripts-extended-shapes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.math`lr(size: #240%, [x])_0^1, [x]_0^1, \\]_0^1, x_0^1, A_0^1`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`n^2, (n + 1)^2, sum_0^1, integral_0^1`,
    ),
  )
}
