// Converted from test/suite/corpus/math-attach-nested-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, math, sym, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [a0Decl, a0] = let_('a0', math.attach({ b: inline`0` }, sym.alpha))
  const [a1Decl, a1] = let_('a1', unsafeRaw.math`alpha^1`)
  const [a2Decl, a2] = let_('a2', unsafeRaw.math`attach(a1, bl: 3)`)
  return doc(
    inline(unsafeRaw.math.block`attach(a^b, b: c) quad
  attach(attach(attach(attach(attach(attach(sum, tl: 1), t: 2), tr: 3), br: 4), b: 5), bl: 6)`),
    m.lines(a0Decl, a1Decl, a2Decl),
    inline(unsafeRaw.math.block`a0 + a1 + a0_2 \\
  a1_2 + a0^2 + a1^2 \\
  a2 + a2_2 + a2^2`),
  )
}
