// Converted from test/suite/corpus/math-lr-matching.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, context, doc, inline, m, page, pt, set, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: pt(122) }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      inline(
        unsafeRaw.math.block`(a) + {b/2} + abs(a)/2 + (b)`,
        space,
        unsafeRaw.math`f(x/2) < zeta(c^2 + abs(a + b/2))`,
      ),
    ),
  )
}
