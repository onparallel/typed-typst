// Converted from test/suite/corpus/gradient-conic-center-shifted-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, inline, pct, pt, spread, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      square({
        size: pt(50),
        fill: gradient.conic({ space: color.hsv, center: [pct(90), pct(90)] }, spread(color.map.rainbow)),
      }),
    ),
  )
}
