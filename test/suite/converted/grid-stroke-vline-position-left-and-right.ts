// Converted from test/suite/corpus/grid-stroke-vline-position-left-and-right.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, green, grid, inline, left, pt, red, right } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 3, inset: pt(5) },
        grid.vline({ stroke: green, position: left }),
        grid.vline({ stroke: red, position: right }),
        inline`a`,
        grid.vline({ stroke: pt(2), position: left }),
        grid.vline({ stroke: red, position: right }),
        inline`b`,
        grid.vline({ stroke: pt(2), position: left }),
        grid.vline({ stroke: red, position: right }),
        inline`c`,
        grid.vline({ stroke: pt(2), position: left }),
      ),
    ),
    inline(
      grid(
        { columns: 3, inset: pt(5), gutter: pt(3) },
        grid.vline({ stroke: green, position: left }),
        grid.vline({ stroke: red, position: right }),
        inline`a`,
        grid.vline({ stroke: blue, position: left }),
        grid.vline({ stroke: red, position: right }),
        inline`b`,
        grid.vline({ stroke: blue, position: left }),
        grid.vline({ stroke: red, position: right }),
        inline`c`,
        grid.vline({ stroke: pt(2), position: left }),
      ),
    ),
  )
}
