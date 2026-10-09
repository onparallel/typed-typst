// Converted from test/suite/corpus/grid-rowspan-excessive-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, doc, em, inline, m, page, pt, red, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          { columns: 4, gutter: pt(3), fill: red },
          inline`a`,
          inline`b`,
          table.cell({ rowspan: 2 }, inline`c`),
          inline`d`,
          table.cell({ colspan: 2, stroke: { bottom: add(aqua, pt(2)) } }, inline`e`),
          table.cell({ stroke: { bottom: aqua } }, inline`f`),
          table.cell({ colspan: 2, rowspan: 10 }, inline`R1`),
          table.cell({ colspan: 2, rowspan: 10 }, inline`R2`),
          inline`b`,
        ),
      ),
    ),
  )
}
