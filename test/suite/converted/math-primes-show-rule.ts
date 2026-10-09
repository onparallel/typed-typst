// Converted from test/suite/corpus/math-primes-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, maroon, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(math.primes, set(text, { fill: maroon })), inline(unsafeRaw.math`f'(x), f''''''(x)`)))
}
