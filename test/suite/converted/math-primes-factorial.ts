// Converted from test/suite/corpus/math-primes-factorial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`n'!' quad n' !' quad a_n'!'^b \\
  n!'! quad n! '! quad a_n!'!^b \\`),
  )
}
