// Converted from test/suite/corpus/math-accent-high-base.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`tilde(integral), tilde(integral)_a^b, tilde(integral_a^b)`))
}
