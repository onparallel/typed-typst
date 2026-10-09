// Converted from test/suite/corpus/curve-multiple-non-closed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { curve, doc, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { stroke: pt(2) },
        curve.line([pt(20), pt(0)]),
        curve.move([pt(0), pt(10)]),
        curve.line([pt(20), pt(10)]),
        curve.move([pt(0), pt(20)]),
        curve.line([pt(20), pt(20)]),
      ),
    ),
  )
}
