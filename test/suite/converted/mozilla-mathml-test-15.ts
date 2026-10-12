// Converted from test/suite/corpus/mozilla-mathml-test-15.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`2^2^2^x`))
}
