// Converted from test/suite/corpus/grid-subheaders-repeat-replace-double-orphan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, spread, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          grid.header(inline`a`),
          inline`x`,
          grid.header({ level: 2 }, inline`b`),
          spread(times([inline`y`], 11)),
          grid.header({ level: 2 }, inline`c`),
          grid.header({ level: 3 }, inline`d`),
          spread(times([inline`z`], 10)),
        ),
      ),
    ),
  )
}
