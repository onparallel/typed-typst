// Converted from test/suite/corpus/mozilla-mathml-test-10.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`sum_(0 <= i <= m \\ 0 < j < n) P(i, j)`))
}
