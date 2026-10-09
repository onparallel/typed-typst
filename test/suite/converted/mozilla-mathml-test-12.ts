// Converted from test/suite/corpus/mozilla-mathml-test-12.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`sum_(i = 1)^p sum_(j = 1)^q sum_(k = 1)^r a_(i j) b_(j k) c_(k i)`))
}
