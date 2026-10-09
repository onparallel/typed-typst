// Converted from test/suite/corpus/color-outside-srgb-gamut.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, deg, doc, inline, oklab, oklch, pct, pt, space, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(square({ size: pt(9), fill: oklab(pct(90), -0.2, -0.1) })),
      space,
      box(square({ size: pt(9), fill: oklch(pct(50), 0.5, deg(0)) })),
    ),
  )
}
