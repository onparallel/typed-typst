// Converted from test/suite/corpus/line-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, doc, inline, line, pt, red, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      line({ length: pt(60), stroke: red }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: pt(2) }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: add(blue, pt(1.5)) }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: { paint: red, thickness: pt(1), dash: 'dashed' } }),
      space,
      v(pt(3)),
      space,
      line({ length: pt(60), stroke: { paint: red, thickness: pt(4), cap: 'round' } }),
    ),
  )
}
