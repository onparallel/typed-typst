// Converted from test/suite/corpus/math-unicode.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`∑_(i=0)^ℕ a ∘ b = \\u{2211}_(i=0)^NN a compose b`))
}
