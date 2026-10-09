// Converted from test/suite/corpus/curve-cubic-mirror.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, curve, doc, inline, m, page, pct, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        curve(
          { fill: red },
          curve.move([pct(0), pct(0)]),
          curve.cubic([pct(-4), pct(4)], [pct(54), pct(46)], [pct(50), pct(50)]),
          curve.cubic(auto, [pct(4), pct(54)], [pct(0), pct(50)]),
          curve.cubic(auto, [pct(54), pct(4)], [pct(50), pct(0)]),
          curve.close(),
        ),
      ),
    ),
  )
}
