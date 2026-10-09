// Converted from test/suite/corpus/math-attach-double-chain.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(delim: #none,
  a_1_2^3,  b^1^2_3,  c_1^2^3,  d^1_2_3;
  a'_1_2^3, b'^1^2_3, c'_1^2^3, d'^1_2_3;
  a_1'_2^3, b^1'^2_3, c_1'^2^3, d^1'_2_3;
)`),
  )
}
