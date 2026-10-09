// Converted from test/suite/corpus/gradient-linear-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, deg, doc, gradient, inline, line, m, page, pct, pt, red, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(100), height: pt(100) }),
      inline(
        line({ length: pct(100), stroke: add(pt(1), gradient.linear(red, blue)) }),
        space,
        line({ length: pct(100), angle: deg(10), stroke: add(pt(1), gradient.linear(red, blue)) }),
        space,
        line({
          length: pct(100),
          angle: deg(10),
          stroke: add(pt(1), gradient.linear({ relative: 'parent' }, red, blue)),
        }),
      ),
    ),
  )
}
