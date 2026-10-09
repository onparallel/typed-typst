// Converted from test/suite/corpus/gradient-math-root.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, gradient, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` })),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`x_"1,2" = frac(-b plus.minus sqrt(b^2 - 4 a c), 2 a)`),
  )
}
