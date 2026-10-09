// Converted from test/suite/corpus/grid-subheaders-short-lived-no-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        v(em(5)),
        space,
        grid(grid.header({ level: 2 }, inline`b`), grid.header({ level: 2 }, inline`c`), inline`d`),
      ),
    ),
  )
}
