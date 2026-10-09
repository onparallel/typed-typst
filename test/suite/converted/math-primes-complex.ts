// Converted from test/suite/corpus/math-primes-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${unsafeRaw.math`a'_b^c`}, ${unsafeRaw.math`a_b'^c`}, ${unsafeRaw.math`a_b^c'`}, ${unsafeRaw.math`a_b'^c'^d'`}`,
    inline`${unsafeRaw.math`(a'_b')^(c'_d')`}, ${unsafeRaw.math`a'/b'`}, ${unsafeRaw.math`a_b'/c_d'`}`,
    inline`${unsafeRaw.math`∫'`}, ${unsafeRaw.math`∑'`}, ${unsafeRaw.math`a'^2^2`}, ${unsafeRaw.math`a'_2_2`}`,
    inline`${unsafeRaw.math`f_n'^a'`}, ${unsafeRaw.math`f^a'_n'`}`,
    inline(unsafeRaw.math.block`∑'_S'`),
  )
}
