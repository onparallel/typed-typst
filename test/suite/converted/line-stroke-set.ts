// Converted from test/suite/corpus/line-stroke-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, line, m, pt, red, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(line, { stroke: { paint: red, thickness: pt(1), cap: 'butt', dash: 'dash-dotted' } }),
      inline(
        line({ length: pt(60) }),
        space,
        v(pt(3)),
        space,
        line({ length: pt(60), stroke: blue }),
        space,
        v(pt(3)),
        space,
        line({ length: pt(60), stroke: { dash: null } }),
      ),
    ),
  )
}
