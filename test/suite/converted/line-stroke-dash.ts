// Converted from test/suite/corpus/line-stroke-dash.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, line, pt, red, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      line({ length: pt(60), stroke: { paint: red, thickness: pt(1), dash: ['dot', pt(1)] } }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: { paint: red, thickness: pt(1), dash: ['dot', pt(1), pt(4), pt(2)] } }),
      space,
      v(pt(3)),
      space,
      line({
        length: pt(60),
        stroke: { paint: red, thickness: pt(1), dash: { array: ['dot', pt(1), pt(4), pt(2)], phase: pt(5) } },
      }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: { paint: red, thickness: pt(1), dash: [] } }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: { paint: red, thickness: pt(1), dash: [pt(1), pt(3), pt(9)] } }),
    ),
  )
}
