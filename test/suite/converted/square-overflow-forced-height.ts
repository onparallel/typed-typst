// Converted from test/suite/corpus/square-overflow-forced-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pct, pt, set, space, square } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(120), height: pt(60) }),
      inline(square({ height: pct(150) }), space, square({ height: pct(150) }, inline`Hello there`)),
    ),
  )
}
