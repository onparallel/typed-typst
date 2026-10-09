// Converted from test/suite/corpus/gradient-math-cancel.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, gradient, inline, m, math, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` })),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`a dot cancel(5) = cancel(25) 5 x + cancel(5) 1`),
  )
}
