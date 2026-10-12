// Converted from test/suite/corpus/mozilla-mathml-test-3.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`(x + y^2) / (k + 1)`))
}
