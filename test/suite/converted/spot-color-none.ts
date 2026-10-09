// Converted from test/suite/corpus/spot-color-none.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, color, doc, inline, let_, luma, m, pct, pt, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [varnishDecl, varnish] = let_('varnish', color.spot(null, luma(pct(0))))
  return doc(
    m.lines(
      varnishDecl,
      unsafeRaw.markup`#let layer = varnish.tint(100%)`,
      inline(box(square({ size: pt(20), fill: unsafeRaw.code<any>`layer` }))),
    ),
  )
}
