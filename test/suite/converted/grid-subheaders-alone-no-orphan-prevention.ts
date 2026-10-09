// Converted from test/suite/corpus/grid-subheaders-alone-no-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5.3) }),
      inline(v(em(2)), space, grid(grid.header(inline`L1`), grid.header({ level: 2 }, inline`L2`))),
    ),
  )
}
