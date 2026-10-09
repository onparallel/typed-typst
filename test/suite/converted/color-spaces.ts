// Converted from test/suite/corpus/color-spaces.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  box,
  cmyk,
  color,
  doc,
  inline,
  let_,
  luma,
  m,
  oklab,
  oklch,
  pct,
  pt,
  rgb,
  space,
  square,
} from '../../../src/index.ts'

export default () => {
  const [colDecl, col] = let_('col', rgb(pct(50), pct(64), pct(16)))
  return doc(
    m.lines(
      colDecl,
      inline(
        box(square({ size: pt(9), fill: col })),
        space,
        box(square({ size: pt(9), fill: rgb(col) })),
        space,
        box(square({ size: pt(9), fill: oklab(col) })),
        space,
        box(square({ size: pt(9), fill: oklch(col) })),
        space,
        box(square({ size: pt(9), fill: luma(col) })),
        space,
        box(square({ size: pt(9), fill: cmyk(col) })),
        space,
        box(square({ size: pt(9), fill: color.linearRgb(col) })),
        space,
        box(square({ size: pt(9), fill: color.hsl(col) })),
        space,
        box(square({ size: pt(9), fill: color.hsv(col) })),
      ),
    ),
  )
}
