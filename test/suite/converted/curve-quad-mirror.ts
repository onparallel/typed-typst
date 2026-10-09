// Converted from test/suite/corpus/curve-quad-mirror.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, curve, doc, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { stroke: pt(2) },
        curve.quad({ relative: true }, [pt(20), pt(40)], [pt(40), pt(40)]),
        curve.quad({ relative: true }, auto, [pt(40), pt(-40)]),
      ),
    ),
  )
}
