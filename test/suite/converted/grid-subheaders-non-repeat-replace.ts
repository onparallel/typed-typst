// Converted from test/suite/corpus/grid-subheaders-non-repeat-replace.typ by scripts/convert-suite.ts — do not edit.
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
          grid.header({ level: 3 }, inline`c`),
          spread(times([inline`y`], 9)),
          grid.header({ level: 2, repeat: false }, inline`d`),
          spread(times([inline`z`], 6)),
        ),
      ),
    ),
  )
}
