// Converted from test/suite/corpus/mozilla-mathml-test-8.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.frac, { style: 'horizontal' }), inline(unsafeRaw.math.block`binom(n, k / 2)`)))
}
