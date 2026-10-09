// Converted from test/suite/corpus/curve-fill-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { curve, doc, inline, ltr, pt, red, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      stack(
        { dir: ltr },
        curve(
          { fill: red, fillRule: 'non-zero' },
          curve.move([pt(25), pt(0)]),
          curve.line([pt(10), pt(50)]),
          curve.line([pt(50), pt(20)]),
          curve.line([pt(0), pt(20)]),
          curve.line([pt(40), pt(50)]),
          curve.close(),
        ),
        curve(
          { fill: red, fillRule: 'even-odd' },
          curve.move([pt(25), pt(0)]),
          curve.line([pt(10), pt(50)]),
          curve.line([pt(50), pt(20)]),
          curve.line([pt(0), pt(20)]),
          curve.line([pt(40), pt(50)]),
          curve.close(),
        ),
      ),
    ),
  )
}
