// Converted from test/suite/corpus/math-lr-unmatched.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`[1,2[ = [1,2) != zeta\\(x/2\\)`))
}
