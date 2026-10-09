// Converted from test/suite/corpus/grid-rtl-vline-position.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  aqua,
  blue,
  doc,
  end,
  green,
  grid,
  inline,
  left,
  m,
  pt,
  red,
  right,
  rtl,
  set,
  start,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { dir: rtl }),
      inline(
        grid(
          { columns: 3, inset: pt(5) },
          grid.vline({ stroke: red, position: left }),
          grid.vline({ stroke: green, position: right }),
          inline`a`,
          grid.vline({ stroke: red, position: left }),
          grid.vline({ stroke: pt(2), position: right }),
          inline`b`,
          grid.vline({ stroke: red, position: left }),
          grid.vline({ stroke: pt(2), position: right }),
          inline`c`,
          grid.vline({ stroke: aqua, position: right }),
        ),
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
        grid.vline({ stroke: pt(2), position: right }),
      ),
    ),
    inline(
      grid(
        { columns: 3, inset: pt(5) },
        grid.vline({ stroke: green, position: start }),
        grid.vline({ stroke: red, position: end }),
        inline`a`,
        grid.vline({ stroke: pt(2), position: start }),
        grid.vline({ stroke: red, position: end }),
        inline`b`,
        grid.vline({ stroke: pt(2), position: start }),
        grid.vline({ stroke: red, position: end }),
        inline`c`,
        grid.vline({ stroke: pt(2), position: start }),
      ),
    ),
    inline(
      grid(
        { columns: 3, inset: pt(5), gutter: pt(3) },
        grid.vline({ stroke: green, position: start }),
        grid.vline({ stroke: red, position: end }),
        inline`a`,
        grid.vline({ stroke: blue, position: start }),
        grid.vline({ stroke: red, position: end }),
        inline`b`,
        grid.vline({ stroke: blue, position: start }),
        grid.vline({ stroke: red, position: end }),
        inline`c`,
        grid.vline({ stroke: pt(2), position: start }),
      ),
    ),
  )
}
