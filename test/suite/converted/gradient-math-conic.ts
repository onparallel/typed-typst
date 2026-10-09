// Converted from test/suite/corpus/gradient-math-conic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, box, deg, doc, gradient, inline, m, math, red, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: gradient.conic({ angle: deg(45) }, red, blue) })),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
)`),
  )
}
