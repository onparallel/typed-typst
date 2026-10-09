// Converted from test/suite/corpus/grid-subheaders-multi-page-rowspan-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, grid, inline, linebreak, m, page, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(9) }),
      inline(
        grid(
          {
            columns: 2,
            columnGutter: pt(4),
            rowGutter: [pt(0), pt(4), pt(8), pt(4)],
            inset: { bottom: pt(0.5) },
            stroke: { bottom: pt(1) },
          },
          grid.header(inline`a`),
          inline`x`,
          grid.header({ level: 2 }, inline`b`),
          inline`y`,
          grid.header({ level: 3 }, inline`c`),
          inline`z`,
          inline`z`,
          grid.cell({ rowspan: 5 }, block({ fill: red, width: em(1.5), height: em(6.4) })),
          inline`cell`,
          inline`cell`,
          inline`a${linebreak()} b`,
          grid.cell({ x: 0 }, inline`end`),
        ),
      ),
    ),
  )
}
