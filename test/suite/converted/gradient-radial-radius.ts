// Converted from test/suite/corpus/gradient-radial-radius.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, inline, pct, pt, space, spread, square } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      square({ size: pt(50), fill: gradient.radial({ space: color.hsl, radius: pct(10) }, spread(color.map.rainbow)) }),
      space,
      square({ size: pt(50), fill: gradient.radial({ space: color.hsl, radius: pct(72) }, spread(color.map.rainbow)) }),
    ),
  )
}
