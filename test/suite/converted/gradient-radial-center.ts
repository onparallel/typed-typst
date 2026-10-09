// Converted from test/suite/corpus/gradient-radial-center.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, grid, inline, pct, pt, spread, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        square({
          size: pt(50),
          fill: gradient.radial({ space: color.hsl, center: [pct(0), pct(0)] }, spread(color.map.rainbow)),
        }),
        square({
          size: pt(50),
          fill: gradient.radial({ space: color.hsl, center: [pct(0), pct(100)] }, spread(color.map.rainbow)),
        }),
        square({
          size: pt(50),
          fill: gradient.radial({ space: color.hsl, center: [pct(100), pct(0)] }, spread(color.map.rainbow)),
        }),
        square({
          size: pt(50),
          fill: gradient.radial({ space: color.hsl, center: [pct(100), pct(100)] }, spread(color.map.rainbow)),
        }),
      ),
    ),
  )
}
