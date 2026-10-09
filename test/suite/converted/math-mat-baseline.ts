// Converted from test/suite/corpus/math-mat-baseline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`mat(
  a, b^2;
  sum_(x \\ y) x, a^(1/2);
  zeta, alpha;
)`),
  )
}
