// Converted from test/suite/corpus/mozilla-mathml-test-18.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.frac, { style: 'horizontal' }),
      inline(unsafeRaw.math.block`f(x) = cases(
    1/3 & "if" 0 <= x <= 1\\;,
    2/3 & "if" 3 <= x <= 4\\;,
    0 & "elsewhere".
  )`),
    ),
  )
}
