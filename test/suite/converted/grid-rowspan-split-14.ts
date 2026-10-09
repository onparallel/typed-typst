// Converted from test/suite/corpus/grid-rowspan-split-14.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, center, cm, doc, fr, inline, lorem, m, page, pt, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(10), height: cm(9), margin: cm(1) }),
      set(text, { size: pt(11) }),
      inline(
        table(
          { columns: [fr(1), fr(1), fr(1)], align: center, rows: [cm(4), auto] },
          inline`A`,
          inline`B`,
          inline`C`,
          table.cell({ rowspan: 4, breakable: false }, lorem(10)),
          inline`D`,
          table.cell({ rowspan: 2, breakable: false }, lorem(20)),
          inline`E`,
        ),
      ),
    ),
  )
}
