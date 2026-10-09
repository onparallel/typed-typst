// Converted from test/suite/corpus/grid-rowspan-over-auto-row.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  bottom,
  doc,
  em,
  grid,
  inline,
  m,
  orange,
  page,
  place,
  pt,
  set,
  strong,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        grid(
          { columns: [em(1), em(1)], rows: [em(0.5), em(0.5), auto], fill: orange, gutter: pt(3) },
          grid.cell({ rowspan: 4 }, add(inline`x x x x`, place(bottom, inline(strong(inline`Bot`))))),
          inline`a`,
          inline`b`,
          inline`c`,
          inline`d`,
        ),
      ),
    ),
  )
}
