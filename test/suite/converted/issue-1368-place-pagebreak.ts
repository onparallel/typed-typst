// Converted from test/suite/corpus/issue-1368-place-pagebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, block, bottom, doc, inline, m, page, pct, place, pt, right, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(40) }),
      inline(block({ height: pct(100) }), space, place(add(bottom, right), inline`Hello world`)),
    ),
  )
}
