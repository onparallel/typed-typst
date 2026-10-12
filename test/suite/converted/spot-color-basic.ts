// Converted from test/suite/corpus/spot-color-basic.typ by scripts/convert-suite.ts — do not edit.
import { box, color, doc, eastern, inline, let_, m, pt, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 2221 C', eastern))
  return doc(
    m.lines(
      pantoneDecl,
      let_('tinted', unsafeRaw.code<any>`pantone.tint(80%)`)[0],
      inline(box(square({ size: pt(20), fill: unsafeRaw.code<any>`tinted` }))),
    ),
  )
}
