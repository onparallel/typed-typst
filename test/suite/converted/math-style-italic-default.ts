// Converted from test/suite/corpus/math-style-italic-default.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`a, A, delta, ϵ, partial, Delta, ϴ`))
}
