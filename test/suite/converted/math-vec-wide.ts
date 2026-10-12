// Converted from test/suite/corpus/math-vec-wide.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`v = vec(1, 2+3, 4)`))
}
