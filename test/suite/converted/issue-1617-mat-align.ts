// Converted from test/suite/corpus/issue-1617-mat-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, codeBlock, context, doc, inline, m, page, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: auto }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      inline(unsafeRaw.math.block`mat(a, b; c, d) mat(x; y)`),
    ),
    inline(unsafeRaw.math.block`x mat(a; c) + y mat(b; d)
  = mat(a x+b y; c x+d y)`),
    inline(unsafeRaw.math.block`mat(
    -d_0, lambda_0, 0, 0, dots;
    mu_1, -d_1, lambda_1, 0, dots;
    0, mu_2, -d_2, lambda_2, dots;
    dots.v, dots.v, dots.v, dots.v, dots.down;
  )
  mat(p_0; p_1; p_2; dots.v)`),
  )
}
