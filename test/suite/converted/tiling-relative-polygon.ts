// Converted from test/suite/corpus/tiling-relative-polygon.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, circle, doc, inline, pct, polygon, pt, tiling } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      polygon(
        { fill: tiling({ relative: 'parent' }, circle({ radius: pt(10) })), stroke: blue },
        [pct(20), pt(0)],
        [pct(60), pt(0)],
        [pct(80), pt(20)],
        [pct(0), pt(20)],
      ),
    ),
  )
}
