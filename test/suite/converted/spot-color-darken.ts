// Converted from test/suite/corpus/spot-color-darken.typ by scripts/convert-suite.ts — do not edit.
import { box, color, doc, inline, let_, m, pct, pt, rgb, space, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [pantoneDecl, pantone] = let_('pantone', color.spot('PANTONE 185 C', rgb(pct(89.4), pct(0.7), pct(17))))
  return doc(
    m.lines(
      pantoneDecl,
      let_('base', unsafeRaw.code<any>`pantone.tint(50%)`)[0],
      let_('dark', unsafeRaw.code<any>`base.darken(25%)`)[0],
      inline(
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`base` })),
        space,
        box(square({ size: pt(15), fill: unsafeRaw.code<any>`dark` })),
      ),
    ),
  )
}
