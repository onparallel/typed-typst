// Converted from test/suite/corpus/gradient-linear-spaces.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, block, color, data, doc, inline, let_, m, page, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [spacesDecl, spaces] = let_(
    'spaces',
    data([
      ['HSV', color.hsv],
      ['HSL', color.hsl],
      ['Oklch', color.oklch],
      ['Oklab', color.oklab],
      ['sRGB', color.rgb],
      ['linear-RGB', color.linearRgb],
      ['Luma', color.luma],
    ]),
  )
  return doc(
    m.lines(
      set(page, { height: auto, margin: pt(0) }),
      set(block, { spacing: pt(0) }),
      spacesDecl,
      inline(unsafeRaw.code<any>`for (name, space) in spaces {
  block(
    width: 100%,
    inset: 4pt,
    fill: gradient.linear(yellow, blue, space: space),
    name,
  )
}`),
    ),
  )
}
