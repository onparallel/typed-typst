// Converted from test/suite/corpus/curve-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, curve, doc, inline, pct, pt, purple } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { fill: purple, stroke: add(pt(3), purple.lighten(pct(50))) },
        curve.move([pt(0), pt(0)]),
        curve.line([pt(30), pt(30)]),
        curve.line([pt(0), pt(30)]),
        curve.line([pt(30), pt(0)]),
      ),
    ),
  )
}
