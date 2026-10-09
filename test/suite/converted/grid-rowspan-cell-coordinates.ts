// Converted from test/suite/corpus/grid-rowspan-cell-coordinates.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, page, pt, red, set, show, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      show(table.cell, (it, ctx) => inline`(${it.x}, ${it.y})`),
      inline(
        table(
          { columns: 3, fill: red },
          inline`a`,
          inline`b`,
          table.cell({ rowspan: 2 }, inline`c`),
          table.cell({ colspan: 2 }, inline`d`),
          table.cell({ colspan: 3, rowspan: 10 }, inline`a`),
          table.cell({ colspan: 2 }, inline`b`),
        ),
        space,
        table(
          { columns: 3, gutter: pt(3), fill: red },
          inline`a`,
          inline`b`,
          table.cell({ rowspan: 2 }, inline`c`),
          table.cell({ colspan: 2 }, inline`d`),
          table.cell({ colspan: 3, rowspan: 9 }, inline`a`),
          table.cell({ colspan: 2 }, inline`b`),
        ),
      ),
    ),
  )
}
