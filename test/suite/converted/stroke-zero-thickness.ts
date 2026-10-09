// Converted from test/suite/corpus/stroke-zero-thickness.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, curve, doc, inline, line, pt, rect, red, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({ width: pt(10), height: pt(10), stroke: null }),
      space,
      rect({ width: pt(10), height: pt(10), stroke: pt(0) }),
      space,
      rect({ width: pt(10), height: pt(10), stroke: null, fill: blue }),
      space,
      rect({ width: pt(10), height: pt(10), stroke: add(pt(0), red), fill: blue }),
    ),
    inline(
      line({ length: pt(30), stroke: pt(0) }),
      space,
      line({ length: pt(30), stroke: { paint: red, thickness: pt(0), dash: ['dot', pt(1)] } }),
    ),
    inline(
      table({ columns: 2, stroke: null }, inline`A`, inline`B`),
      space,
      table({ columns: 2, stroke: pt(0) }, inline`A`, inline`B`),
    ),
    inline(
      curve(
        { stroke: null },
        curve.move([pt(0), pt(30)]),
        curve.line([pt(30), pt(30)]),
        curve.line([pt(15), pt(0)]),
        curve.close(),
      ),
    ),
    inline(
      curve(
        { stroke: pt(0) },
        curve.move([pt(0), pt(30)]),
        curve.line([pt(30), pt(30)]),
        curve.line([pt(15), pt(0)]),
        curve.close(),
      ),
    ),
  )
}
