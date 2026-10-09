// Converted from test/suite/corpus/math-underover-line-superscript.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`J^b != overline(J)^b != underline(J)^b != underline(overline(J))^b \\
 K^3 != overline(K)^3 != underline(K)^3 != underline(overline(K))^3 \\
 T^i != overline(T)^i != underline(T)^i != underline(overline(T))^i`),
  )
}
