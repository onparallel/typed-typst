// Converted from test/suite/corpus/math-align-spacing-ignorant.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, place, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pDecl, p_2] = let_('p', place(inline()))
  return doc(
    m.lines(
      pDecl,
      inline(unsafeRaw.math.block`a + & b + & c & e &    + d \\
  a + &     & c &   & #p + d`),
    ),
  )
}
