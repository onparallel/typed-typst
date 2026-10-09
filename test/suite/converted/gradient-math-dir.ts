// Converted from test/suite/corpus/gradient-math-dir.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, gradient, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow, dir: ttb)` })),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
)`),
    inline(unsafeRaw.math.block`x_"1,2" = frac(-b plus.minus sqrt(b^2 - 4 a c), 2 a)`),
  )
}
