// Converted from test/suite/corpus/math-root-syntax-prec.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`√a/b ∛a_b ∜f' √n! \\
  √a b^c  √a (b)^c  √a(b)^c`),
  )
}
