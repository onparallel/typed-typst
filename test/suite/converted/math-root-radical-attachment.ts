// Converted from test/suite/corpus/math-root-radical-attachment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`sqrt(a) quad
  sqrt(f) quad
  sqrt(q) quad
  sqrt(a^2) \\
  sqrt(n_0) quad
  sqrt(b^()) quad
  sqrt(b^2) quad
  sqrt(q_1^2)`),
  )
}
