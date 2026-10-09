// Converted from test/suite/corpus/polygon-line-join.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, em, float, inline, ltr, polygon, pt, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      stack(
        { dir: ltr, spacing: em(1) },
        polygon(
          { stroke: { thickness: pt(4), paint: blue, join: 'round' } },
          [pt(0), pt(20)],
          [pt(15), pt(0)],
          [pt(0), pt(40)],
          [pt(15), pt(45)],
        ),
        polygon(
          { stroke: { thickness: pt(4), paint: blue, join: 'bevel' } },
          [pt(0), pt(20)],
          [pt(15), pt(0)],
          [pt(0), pt(40)],
          [pt(15), pt(45)],
        ),
        polygon(
          { stroke: { thickness: pt(4), paint: blue, join: 'miter' } },
          [pt(0), pt(20)],
          [pt(15), pt(0)],
          [pt(0), pt(40)],
          [pt(15), pt(45)],
        ),
        polygon(
          { stroke: { thickness: pt(4), paint: blue, join: 'miter', miterLimit: float(20) } },
          [pt(0), pt(20)],
          [pt(15), pt(0)],
          [pt(0), pt(40)],
          [pt(15), pt(45)],
        ),
      ),
    ),
  )
}
