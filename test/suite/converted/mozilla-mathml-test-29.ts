// Converted from test/suite/corpus/mozilla-mathml-test-29.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`lim_(n -> +oo) sqrt(2 pi n) / n! (n / e)^n = 1`))
}
