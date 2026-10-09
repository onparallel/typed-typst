// Converted from test/suite/corpus/gradient-math-mat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, gradient, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` })),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9
)`),
  )
}
