// Converted from test/suite/corpus/grid-rowspan-split-8.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, pt, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        table(
          { columns: 2, gutter: pt(3), stroke: red, inset: pt(5) },
          table.cell({ rowspan: 5 }, inline`a${linebreak()} b${linebreak()} c${linebreak()} d${linebreak()} e`),
        ),
      ),
    ),
  )
}
