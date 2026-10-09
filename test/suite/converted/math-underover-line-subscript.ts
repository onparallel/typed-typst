// Converted from test/suite/corpus/math-underover-line-subscript.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`A_2 != overline(A)_2 != underline(A)_2 != underline(overline(A))_2 \\
 V_y != overline(V)_y != underline(V)_y != underline(overline(V))_y \\
 W_l != overline(W)_l != underline(W)_l != underline(overline(W))_l`),
  )
}
