// Converted from test/suite/corpus/issue-1240-stack-v-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, inline, ltr, m, page, pt, set, stack, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline(
        stack({ dir: ltr, spacing: fr(1) }, stack(inline`a`, fr(1), inline`b`), stack(inline`a`, v(fr(1)), inline`b`)),
      ),
    ),
  )
}
