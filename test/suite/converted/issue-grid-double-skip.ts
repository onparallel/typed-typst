// Converted from test/suite/corpus/issue-grid-double-skip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(70) }), inline`${v(pt(40))} The following:`, m.enum(m.item(['A']), m.item(['B']))),
  )
}
