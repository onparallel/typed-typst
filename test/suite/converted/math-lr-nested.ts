// Converted from test/suite/corpus/math-lr-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, let_, m, math, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [body1Decl, body1] = let_('body1', math.lr({ size: em(4) }, unsafeRaw.math`|`))
  const [body2Decl, body2] = let_('body2', unsafeRaw.math`lr(|, size: #4em)`)
  return doc(
    m.lines(body1Decl, body2Decl),
    inline(
      unsafeRaw.math`lr(|, size: #2em)`,
      space,
      unsafeRaw.math`lr(lr(|, size: #4em), size: #50%)`,
      space,
      unsafeRaw.math`lr(body1, size: #50%)`,
      space,
      unsafeRaw.math`lr(body2, size: #50%)`,
    ),
  )
}
