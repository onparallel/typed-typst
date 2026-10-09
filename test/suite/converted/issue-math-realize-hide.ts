// Converted from test/suite/corpus/issue-math-realize-hide.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, hide, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math.block`x^2 #hide[$(>= phi.alt) union y^2 0$] z^2`} Hello ${hide(inline`there ${unsafeRaw.math`x`}`)}
and ${hide(inline(unsafeRaw.math.block`f(x) := x^2`))}`)
}
