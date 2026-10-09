// Converted from test/suite/corpus/grid-colspan-thick-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, lorem, m, page, pt, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(300) }),
      inline(
        table(
          { columns: [em(2), em(2), auto, auto], stroke: pt(5) },
          inline`A`,
          inline`B`,
          inline`C`,
          inline`D`,
          table.cell({ colspan: 4 }, lorem(20)),
          inline`A`,
          table.cell({ colspan: 2 }, inline`BCBCBCBC`),
          inline`D`,
        ),
      ),
    ),
  )
}
