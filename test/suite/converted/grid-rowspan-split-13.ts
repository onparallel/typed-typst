// Converted from test/suite/corpus/grid-rowspan-split-13.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, fr, inline, lorem, m, page, pt, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(10), height: cm(2.5), margin: cm(0.5) }),
      set(text, { size: pt(11) }),
      inline(
        table(
          { columns: [fr(1), fr(1), fr(1)] },
          inline`A`,
          inline`B`,
          inline`C`,
          inline`D`,
          table.cell({ rowspan: 2 }, lorem(4)),
          inline`E`,
          inline`F`,
          inline`G`,
        ),
      ),
    ),
  )
}
