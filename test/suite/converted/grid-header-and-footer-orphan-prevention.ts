// Converted from test/suite/corpus/grid-header-and-footer-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, orange, page, pt, set, space, spread, strong, times, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(13) }),
      inline(
        v(em(8)),
        space,
        grid(
          { columns: 3, gutter: pt(5) },
          grid.header(
            inline(strong(inline`Mui`)),
            inline(strong(inline`A`)),
            grid.cell({ rowspan: 2, fill: orange }, inline(strong(inline`B`))),
            inline(strong(inline`Header`)),
            inline(strong(inline`Header`), space, v(em(0.1))),
          ),
          spread(times([inline`Test`, inline`Test`, inline`Test`], 7)),
          grid.footer(
            inline(strong(inline`Mui`)),
            inline(strong(inline`A`)),
            grid.cell({ rowspan: 2, fill: orange }, inline(strong(inline`B`))),
            inline(strong(inline`Footer`)),
            inline(strong(inline`Footer`), space, v(em(0.1))),
          ),
        ),
      ),
    ),
  )
}
