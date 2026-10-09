// Converted from test/suite/corpus/math-frac-precedence.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`a_1/b_2, 1/f(x), zeta(x)/2, "foo"[|x|]/2 \\
  1.2/3.7, 2.3^3.4 \\
  f [x]/2, phi [x]/2 \\
  +[x]/2, 1(x)/2, 2[x]/2, 🏳️‍🌈[x]/2 \\
  (a)b/2, b(a)[b]/2 \\
  n!/2, 5!/2, n !/2, 1/n!, 1/5!`),
  )
}
