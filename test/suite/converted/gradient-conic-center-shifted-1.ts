// Converted from test/suite/corpus/gradient-conic-center-shifted-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, inline, pct, pt, spread, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      square({
        size: pt(50),
        fill: gradient.conic({ space: color.hsv, center: [pct(10), pct(10)] }, spread(color.map.rainbow)),
      }),
    ),
  )
}
