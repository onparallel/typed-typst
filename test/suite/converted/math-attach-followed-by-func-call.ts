// Converted from test/suite/corpus/math-attach-followed-by-func-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math`pi_1(Y), a_f(x), a^zeta (x), a^abs(b)_sqrt(c) \\
 a^subset.eq (x), a_(zeta(x)), pi_(1(Y)), a^(abs(b))_(sqrt(c))`),
  )
}
