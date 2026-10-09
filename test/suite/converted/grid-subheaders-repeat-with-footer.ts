// Converted from test/suite/corpus/grid-subheaders-repeat-with-footer.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, spread, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          grid.header(inline`a`),
          inline`m`,
          grid.header({ level: 2 }, inline`b`),
          spread(times([inline`c`], 10)),
          grid.footer(inline`f`),
        ),
      ),
    ),
  )
}
