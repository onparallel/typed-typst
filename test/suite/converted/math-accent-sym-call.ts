// Converted from test/suite/corpus/math-accent-sym-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`grave(a), acute(b), hat(f), tilde(§), macron(ä), dash(ä), breve(ä), \\
  dot(!), dot.double(a), diaer(a), dot.triple(a), dot.quad(a), circle(a), \\
  acute.double(a), caron(@), arrow(Z), arrow.l(Z), arrow.l.r(Z), \\
  harpoon(a), harpoon.lt(a)`),
  )
}
