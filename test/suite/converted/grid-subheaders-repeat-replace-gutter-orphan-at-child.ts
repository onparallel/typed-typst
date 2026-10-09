// Converted from test/suite/corpus/grid-subheaders-repeat-replace-gutter-orphan-at-child.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, linebreak, m, page, pt, set, spread, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          { gutter: pt(3) },
          grid.header(inline`a`),
          inline`x`,
          grid.header({ level: 2 }, inline`b`),
          spread(times([inline`y`], 9)),
          grid.header({ level: 2 }, inline`c`),
          inline`z ${linebreak()} z`,
          spread(times([inline`z`], 3)),
        ),
      ),
    ),
  )
}
