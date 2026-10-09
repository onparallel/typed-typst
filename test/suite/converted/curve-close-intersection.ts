// Converted from test/suite/corpus/curve-close-intersection.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, black, curve, doc, inline, pt, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { fill: yellow, stroke: black },
        curve.move([pt(10), pt(10)]),
        curve.cubic({ relative: true }, [pt(5), pt(20)], [pt(15), pt(20)], [pt(20), pt(0)]),
        curve.cubic({ relative: true }, auto, [pt(15), pt(-10)], [pt(20), pt(0)]),
        curve.close({ mode: 'straight' }),
      ),
    ),
  )
}
