// Converted from test/suite/corpus/math-size-math-content-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [arrowDecl, arrow] = let_('arrow', unsafeRaw.math`stretch(->)^"much text"`)
  return doc(
    m.lines(
      arrowDecl,
      inline(unsafeRaw.math.block`arrow A^arrow A^A^arrow`),
      unsafeRaw.markup`#let width = context measure(arrow).width`,
      inline(unsafeRaw.math.block`width A^width A^A^width`),
    ),
  )
}
