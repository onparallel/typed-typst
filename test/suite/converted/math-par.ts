// Converted from test/suite/corpus/math-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, m, par, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(par, highlight), inline(unsafeRaw.math.block`a + "bc" + #[c] + #box[d] + #block[e]`)))
}
