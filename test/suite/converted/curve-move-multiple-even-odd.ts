// Converted from test/suite/corpus/curve-move-multiple-even-odd.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { curve, doc, inline, pct, pt, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { fill: yellow, stroke: yellow.darken(pct(20)), fillRule: 'even-odd' },
        curve.move([pt(10), pt(10)]),
        curve.line([pt(20), pt(10)]),
        curve.line([pt(20), pt(20)]),
        curve.close(),
        curve.move([pt(0), pt(5)]),
        curve.line([pt(25), pt(5)]),
        curve.line([pt(25), pt(30)]),
        curve.close({ mode: 'smooth' }),
      ),
    ),
  )
}
