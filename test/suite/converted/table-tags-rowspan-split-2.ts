// Converted from test/suite/corpus/table-tags-rowspan-split-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, linebreak, m, page, set, space, table, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(6) }),
      inline(
        table(
          { rows: [em(4), auto, em(4)], columns: 3 },
          inline`a1`,
          table.cell({ rowspan: 3 }, times(inline`b${linebreak()}${space}`, 5)),
          inline`c1`,
          inline`a2`,
          inline`c2`,
          inline`a3`,
          inline`c3`,
        ),
      ),
    ),
  )
}
