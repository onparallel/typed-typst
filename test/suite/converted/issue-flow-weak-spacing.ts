// Converted from test/suite/corpus/issue-flow-weak-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { columns, doc, inline, m, page, pt, rect, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline(
        rect(
          { inset: pt(0) },
          columns(2, inline`${space}Text ${v(pt(12))} Hi ${v({ weak: true }, pt(10))} At column break.${space}`),
        ),
      ),
    ),
  )
}
