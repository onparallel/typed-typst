// Converted from test/suite/corpus/spot-colorant-all.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, box, color, doc, inline, let_, m, pt, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', color.spot('all', blue))
  return doc(m.lines(cDecl, inline(box(square({ size: pt(15), fill: unsafeRaw.code<any>`c.tint(75%)` })))))
}
