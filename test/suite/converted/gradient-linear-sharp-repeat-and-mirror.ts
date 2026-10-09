// Converted from test/suite/corpus/gradient-linear-sharp-repeat-and-mirror.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, gradient, inline, pct, pt, rect, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({
        height: pt(40),
        width: pct(100),
        fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow).sharp(10).repeat(5, mirror: true)`,
      }),
    ),
  )
}
