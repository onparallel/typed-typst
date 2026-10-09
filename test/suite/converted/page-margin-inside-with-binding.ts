// Converted from test/suite/corpus/page-margin-inside-with-binding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pagebreak, pct, pt, rect, right, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { binding: right, margin: { inside: pt(30) } }),
      inline(
        rect({ width: pct(100) }, inline`Bound`),
        space,
        pagebreak(),
        space,
        rect({ width: pct(100) }, inline`Right`),
      ),
    ),
  )
}
