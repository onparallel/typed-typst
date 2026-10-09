// Converted from test/suite/corpus/mozilla-mathml-test-9.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math.block`binom(p, 2) x^2 y^(p - 2) - 1 / (1 - x) 1 / (1 - x^2)`))
}
