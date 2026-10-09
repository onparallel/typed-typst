// Converted from test/suite/corpus/spot-color-tints.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, color, doc, inline, let_, m, pct, pt, rgb, space, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 185 C', rgb(pct(89.4), pct(0.7), pct(17))))
  return doc(
    m.lines(
      pantoneDecl,
      inline(
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`pantone.tint(100%)` })),
        space,
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`pantone.tint(75%)` })),
        space,
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`pantone.tint(50%)` })),
        space,
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`pantone.tint(25%)` })),
        space,
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`pantone.tint(0%)` })),
      ),
    ),
  )
}
