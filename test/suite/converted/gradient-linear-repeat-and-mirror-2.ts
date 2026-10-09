// Converted from test/suite/corpus/gradient-linear-repeat-and-mirror-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, gradient, inline, pct, pt, rect, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({
        height: pt(40),
        width: pct(100),
        fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow).repeat(2, mirror: true)`,
      }),
    ),
  )
}
