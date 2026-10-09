// Converted from test/suite/corpus/grid-header-stroke-edge-cases.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, auto, black, doc, em, inline, m, page, pt, set, spread, table, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        table(
          { columns: 2, stroke: black, gutter: [auto, pt(3)] },
          table.header(inline`c`, inline`d`),
          spread(times([table.cell({ stroke: aqua }, inline`d`)], 8)),
        ),
      ),
    ),
  )
}
