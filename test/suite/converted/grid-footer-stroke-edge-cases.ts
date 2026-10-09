// Converted from test/suite/corpus/grid-footer-stroke-edge-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, black, doc, em, inline, m, page, set, spread, table, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          { columns: 2, stroke: black },
          spread(times([table.cell({ stroke: aqua }, inline`d`)], 8)),
          table.footer(table.cell({ rowspan: 2, colspan: 2 }, inline`a`), inline`c`, inline`d`),
        ),
      ),
    ),
  )
}
