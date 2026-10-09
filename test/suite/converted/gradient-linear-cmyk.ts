// Converted from test/suite/corpus/gradient-linear-cmyk.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, cmyk, doc, gradient, inline, let_, m, page, pct, pt, rect, rgb, set } from '../../../src/index.ts'

export default () => {
  const [violetDecl, violet] = let_('violet', cmyk(pct(75), pct(80), pct(0), pct(0)))
  const [blueDecl, blue_2] = let_('blue', cmyk(pct(75), pct(30), pct(0), pct(0)))
  return doc(
    set(page, { margin: pt(0), width: pt(100), height: auto }),
    m.lines(violetDecl, blueDecl),
    inline(rect({ width: pct(100), height: pt(10), fill: gradient.linear(violet, blue_2) })),
    inline(rect({ width: pct(100), height: pt(10), fill: gradient.linear(rgb(violet), rgb(blue_2)) })),
    inline(rect({ width: pct(100), height: pt(10), fill: gradient.linear({ space: cmyk }, violet, blue_2) })),
  )
}
