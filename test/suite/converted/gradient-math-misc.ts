// Converted from test/suite/corpus/gradient-math-misc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, gradient, inline, m, math, set, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.equation, set(text, { fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` })),
      show(math.equation, box),
    ),
    inline(
      unsafeRaw.math.block`hat(x) = bar x bar = vec(x, y, z) = tilde(x) = dot(x)`,
      space,
      unsafeRaw.math.block`x prime = vec(1, 2, delim: "[")`,
      space,
      unsafeRaw.math.block`sum_(i in NN) 1 + i`,
      space,
      unsafeRaw.math.block`attach(
  Pi, t: alpha, b: beta,
  tl: 1, tr: 2+3, bl: 4+5, br: 6,
)`,
    ),
  )
}
