// Converted from test/suite/corpus/curve-cubic-inflection.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, curve, doc, inline, m, page, pct, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(120) }),
      inline(
        curve(
          { fill: blue.lighten(pct(80)), stroke: blue },
          curve.move([pct(30), pct(0)]),
          curve.cubic([pct(10), pct(0)], [pct(10), pct(60)], [pct(30), pct(60)]),
          curve.cubic(null, [pct(110), pct(0)], [pct(50), pct(30)]),
          curve.cubic([pct(110), pct(30)], [pct(65), pct(30)], [pct(30), pct(0)]),
          curve.close({ mode: 'straight' }),
        ),
      ),
    ),
  )
}
