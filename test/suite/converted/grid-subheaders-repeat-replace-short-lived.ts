// Converted from test/suite/corpus/grid-subheaders-repeat-replace-short-lived.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, spread, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          grid.header(inline`a`),
          grid.header({ level: 2 }, inline`b`),
          grid.header({ level: 2 }, inline`c`),
          grid.header({ level: 2 }, inline`d`),
          grid.header({ level: 2 }, inline`e`),
          grid.header({ level: 2 }, inline`f`),
          grid.header({ level: 2 }, inline`g`),
          grid.header({ level: 2 }, inline`h`),
          grid.header({ level: 2 }, inline`i`),
          grid.header({ level: 2 }, inline`j`),
          grid.header({ level: 3 }, inline`k`),
          spread(times([inline`z`], 10)),
        ),
      ),
    ),
  )
}
