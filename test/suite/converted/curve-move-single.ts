// Converted from test/suite/corpus/curve-move-single.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { curve, doc, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      curve(
        { stroke: pt(5) },
        curve.move([pt(0), pt(30)]),
        curve.line([pt(30), pt(30)]),
        curve.line([pt(15), pt(0)]),
        curve.close(),
      ),
    ),
  )
}
