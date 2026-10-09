// Converted from test/suite/corpus/math-attach-high.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`sqrt(a_(1/2)^zeta), sqrt(a_alpha^(1/2)), sqrt(a_(1/2)^(3/4)) \\
  sqrt(attach(a, tl: 1/2, bl: 3/4)),
  sqrt(attach(a, tl: 1/2, bl: 3/4, tr: 1/2, br: 3/4))`),
  )
}
