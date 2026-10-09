// Converted from test/suite/corpus/issue-5819-gradient-repeat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, gradient, let_, m, red, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [myGradientDecl, myGradient] = let_('my-gradient', gradient.linear(red, blue).repeat(5))
  const [myGradient2Decl, myGradient2] = let_('my-gradient2', gradient.linear(red, blue).repeat({ mirror: true }, 5))
  return doc(
    m.lines(
      myGradientDecl,
      unsafeRaw.markup`#let _ = gradient.linear(..my-gradient.stops())`,
      myGradient2Decl,
      unsafeRaw.markup`#let _ = gradient.linear(..my-gradient2.stops())`,
    ),
  )
}
