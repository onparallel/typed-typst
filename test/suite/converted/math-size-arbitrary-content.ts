// Converted from test/suite/corpus/math-size-arbitrary-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, pt, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [stuffDecl, stuff] = let_('stuff', square({ inset: pt(0) }, inline`hello`))
  const [squareDecl, square_2] = let_('square', square({ size: pt(5) }))
  return doc(m.lines(stuffDecl, squareDecl, inline(unsafeRaw.math.block`stuff sum^stuff_square square`)))
}
