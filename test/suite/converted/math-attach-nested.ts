// Converted from test/suite/corpus/math-attach-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`1/(V^2^3^4^5),
  frac(
    attach(
      limits(V), br: attach(2, br: 3), b: attach(limits(2), b: 3)),
    attach(
      limits(V), tl: attach(2, tl: 3), t: attach(limits(2), t: 3))),
  attach(Omega,
    tl: attach(2, tl: attach(3, tl: attach(4, tl: 5))),
    tr: attach(2, tr: attach(3, tr: attach(4, tr: 5))),
    bl: attach(2, bl: attach(3, bl: attach(4, bl: 5))),
    br: attach(2, br: attach(3, br: attach(4, br: 5))),
  )`),
  )
}
