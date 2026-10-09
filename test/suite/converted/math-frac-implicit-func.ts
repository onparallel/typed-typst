// Converted from test/suite/corpus/math-frac-implicit-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`f'(x) / f_pi{x} \\
  sin^2(x) / f_0(x) quad f!(x) / g^(-1)(x) \\
  a_\\u{2a}[|x} / a_"2a"{x|] quad f_pi.alt{x} / f_#math.pi.alt{x} \\
  a(b)_c(d)^e(f) / g(h)'_i(j)' \\
  (x)'(x)'(x)' / (x)'(x)'(x)' \\`),
  )
}
