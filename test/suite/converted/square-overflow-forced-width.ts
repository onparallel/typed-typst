// Converted from test/suite/corpus/square-overflow-forced-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pct, pt, set, space, square } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(60), height: pt(100) }),
      inline(square({ width: pct(150) }), space, square({ width: pct(150) }, inline`Hello there`)),
    ),
  )
}
