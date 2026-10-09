// Converted from test/suite/corpus/spot-color-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, color, doc, eastern, inline, let_, m, pt, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 2221 C', eastern))
  return doc(
    m.lines(
      pantoneDecl,
      unsafeRaw.markup`#let tinted = pantone.tint(80%)`,
      inline(box(square({ size: pt(20), fill: unsafeRaw.code<any>`tinted` }))),
    ),
  )
}
