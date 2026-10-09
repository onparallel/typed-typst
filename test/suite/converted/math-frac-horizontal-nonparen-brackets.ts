// Converted from test/suite/corpus/math-frac-horizontal-nonparen-brackets.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, math, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(math.frac, { style: 'horizontal' }), inline(unsafeRaw.math.block`[x+y] / {z}`)))
}
