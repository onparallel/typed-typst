// Converted from test/suite/corpus/grid-subheaders-multi-page-row-right-after.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, grid, inline, m, page, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          { columns: 1 },
          grid.header(inline`a`),
          inline`x`,
          grid.header({ level: 2 }, inline`b`),
          grid.header({ level: 3 }, inline`c`),
          grid.cell(block({ fill: red, width: em(1.5), height: em(6.4) })),
          inline`done.`,
          inline`done.`,
        ),
      ),
    ),
  )
}
