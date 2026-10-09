// Converted from test/suite/corpus/mozilla-mathml-test-7.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`a_0 + 1 / (a_1 + 1 / (a_2 + 1 / (a_3 + 1 / a_4)))`))
}
