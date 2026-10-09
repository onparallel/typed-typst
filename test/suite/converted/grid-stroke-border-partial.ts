// Converted from test/suite/corpus/grid-stroke-border-partial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blue, doc, em, green, inline, m, page, red, set, table, unsafeRaw, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: em(7), margin: { bottom: em(1) } }),
      inline(
        table(
          { columns: 4, stroke: (x, y) => unsafeRaw.code<any>`if y == 0 or y == 4 { orange } else { aqua }` },
          table.hline({ stroke: blue, start: 1, end: 2 }),
          table.cell({ stroke: red }, v(em(3))),
          table.cell({ stroke: blue }, inline`b`),
          table.cell({ stroke: green }, inline`c`),
          inline`M`,
          inline`a`,
          inline`b`,
          inline`c`,
          inline`M`,
          inline`d`,
          inline`e`,
          inline`f`,
          inline`M`,
          inline`g`,
          inline`h`,
          inline`i`,
          inline`M`,
          table.cell({ stroke: red }, inline`a`),
          table.cell({ stroke: blue }, inline`b`),
          table.cell({ stroke: green }, inline`c`),
          inline`M`,
          table.hline({ stroke: blue, start: 1, end: 2 }),
        ),
      ),
    ),
  )
}
