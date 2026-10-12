// Converted from test/suite/corpus/math-accent-sized.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`tilde(sum), tilde(sum, size: #50%), accent(H, hat, size: #200%)`))
}
