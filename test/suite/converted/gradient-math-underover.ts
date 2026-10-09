// Converted from test/suite/corpus/gradient-math-underover.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, gradient, inline, m, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` })),
      show(math.equation, box),
    ),
    inline(unsafeRaw.math.block`underline(X^2)`, space, unsafeRaw.math.block`overline("hello, world!")`),
  )
}
