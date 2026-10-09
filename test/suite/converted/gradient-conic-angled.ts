// Converted from test/suite/corpus/gradient-conic-angled.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, deg, doc, gradient, inline, pt, spread, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      square({ size: pt(50), fill: gradient.conic({ space: color.hsv, angle: deg(90) }, spread(color.map.rainbow)) }),
    ),
  )
}
