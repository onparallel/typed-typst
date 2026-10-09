// Converted from test/suite/corpus/grid-subheaders-non-repeating-replace-didnt-fit-once.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, linebreak, m, page, set, spread, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          grid.header(inline`a`),
          inline`x`,
          grid.header({ level: 2 }, inline`b`),
          spread(times([inline`y`], 10)),
          grid.header({ level: 2, repeat: false }, inline`c${linebreak()} c${linebreak()} c`),
          spread(times([inline`z`], 4)),
        ),
      ),
    ),
  )
}
