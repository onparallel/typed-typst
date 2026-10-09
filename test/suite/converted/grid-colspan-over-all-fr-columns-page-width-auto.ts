// Converted from test/suite/corpus/grid-colspan-over-all-fr-columns-page-width-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, fr, inline, lorem, m, page, set, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        table({ columns: [fr(1), fr(1), auto] }, inline`A`, inline`B`, inline`C`, inline`D`, inline`E`, inline`F`),
        space,
        table(
          { columns: [fr(1), fr(1), auto] },
          table.cell({ colspan: 3 }, lorem(8)),
          inline`A`,
          inline`B`,
          inline`C`,
          inline`D`,
          inline`E`,
          inline`F`,
        ),
      ),
    ),
  )
}
