// Converted from test/suite/corpus/square-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pct, pt, rect, set, square } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(80) }),
      inline(square({ width: pct(40) }, rect({ width: pct(60), height: pct(80) }))),
    ),
  )
}
