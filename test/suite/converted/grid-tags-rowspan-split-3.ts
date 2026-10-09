// Converted from test/suite/corpus/grid-tags-rowspan-split-3.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  bottom,
  doc,
  em,
  grid,
  inline,
  linebreak,
  m,
  orange,
  page,
  place,
  pt,
  red,
  set,
  space,
  spread,
  strong,
  times,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        grid(
          { columns: 2, fill: red, inset: pt(0) },
          grid.cell(
            { fill: orange, rowspan: 10 },
            add(
              add(place(bottom, inline(strong(inline`Z`))), times(inline`x${linebreak()}${space}`, 10)),
              place(bottom, inline(strong(inline`ZZ`))),
            ),
          ),
          spread(times([inline`y`], 10)),
          inline`a`,
          inline`b`,
        ),
      ),
    ),
  )
}
