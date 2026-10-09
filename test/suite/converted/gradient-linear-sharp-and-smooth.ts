// Converted from test/suite/corpus/gradient-linear-sharp-and-smooth.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { color, doc, gradient, inline, pct, pt, space, spread, square, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      square({
        size: pt(100),
        fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow, space: color.hsl).sharp(10, smoothness: 40%)`,
      }),
      space,
      square({
        size: pt(100),
        fill: gradient.radial({ space: color.hsl }, spread(color.map.rainbow)).sharp({ smoothness: pct(40) }, 10),
      }),
      space,
      square({
        size: pt(100),
        fill: gradient.conic({ space: color.hsl }, spread(color.map.rainbow)).sharp({ smoothness: pct(40) }, 10),
      }),
    ),
  )
}
