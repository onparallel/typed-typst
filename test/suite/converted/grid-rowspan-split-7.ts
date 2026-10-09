// Converted from test/suite/corpus/grid-rowspan-split-7.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, linebreak, m, page, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        grid(
          { columns: 2, stroke: red, inset: pt(5) },
          grid.cell({ rowspan: 5 }, inline`a${linebreak()} b${linebreak()} c${linebreak()} d${linebreak()} e`),
        ),
      ),
    ),
  )
}
