// Converted from test/suite/corpus/curve-close-smooth.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blue, curve, doc, inline, pct, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { fill: blue.lighten(pct(80)), stroke: blue },
        curve.move([pt(0), pt(40)]),
        curve.cubic([pt(0), pt(70)], [pt(10), pt(80)], [pt(40), pt(80)]),
        curve.cubic(auto, [pt(80), pt(70)], [pt(80), pt(40)]),
        curve.cubic(auto, [pt(70), pt(0)], [pt(40), pt(0)]),
        curve.close({ mode: 'smooth' }),
      ),
    ),
  )
}
