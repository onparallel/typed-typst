// Converted from test/suite/corpus/mozilla-mathml-test-16.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`integral_1^x (dif t) / t`))
}
