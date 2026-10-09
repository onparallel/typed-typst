// Converted from test/suite/corpus/issue-7398-grid-line-end-oob.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        table(
          { columns: 2 },
          inline`A`,
          inline`B`,
          inline`C`,
          inline`D`,
          table.vline({ end: 3 }),
          table.hline({ end: 3 }),
        ),
      ),
    ),
  )
}
