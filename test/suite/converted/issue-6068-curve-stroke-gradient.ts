// Converted from test/suite/corpus/issue-6068-curve-stroke-gradient.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, curve, doc, gradient, inline, let_, line, m, pt, red, space } from '../../../src/index.ts'

export default () => {
  const [strokeDecl, stroke_2] = let_('stroke', gradient.linear(blue, red).sharp(2))
  return doc(
    m.lines(
      strokeDecl,
      inline(
        line({ start: [pt(0), pt(0)], end: [pt(100), pt(0)], stroke: stroke_2 }),
        space,
        curve({ stroke: stroke_2 }, curve.line([pt(100), pt(0)])),
        space,
        curve({ stroke: stroke_2 }, curve.quad(null, [pt(100), pt(0)])),
        space,
        curve({ stroke: stroke_2 }, curve.quad(null, [pt(100), pt(0)]), curve.quad(null, [pt(100), pt(10)])),
        space,
        line({ start: [pt(10), pt(0)], end: [pt(90), pt(0)], stroke: stroke_2 }),
        space,
        curve(
          { stroke: stroke_2 },
          curve.move([pt(10), pt(0)]),
          curve.quad(null, [pt(90), pt(0)]),
          curve.quad(null, [pt(90), pt(10)]),
        ),
      ),
    ),
  )
}
