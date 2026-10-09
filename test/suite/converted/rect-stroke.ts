// Converted from test/suite/corpus/rect-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, pt, rect, red, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      rect({ width: pt(20), height: pt(20), stroke: red }),
      space,
      v(pt(3)),
      space,
      rect({ width: pt(20), height: pt(20), stroke: { rest: red, top: { paint: blue, dash: 'dashed' } } }),
      space,
      v(pt(3)),
      space,
      rect({ width: pt(20), height: pt(20), stroke: { thickness: pt(5), join: 'round' } }),
    ),
  )
}
