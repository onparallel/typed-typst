// Converted from test/suite/corpus/grid-subheaders-non-repeating-replace-orphan.typ by scripts/convert-suite.ts — do not edit.
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
          spread(times([inline`y`], 12)),
          grid.header({ level: 2, repeat: false }, inline`c`),
          spread(times([inline`z`], 10)),
        ),
      ),
    ),
  )
}
