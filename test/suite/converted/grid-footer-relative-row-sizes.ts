// Converted from test/suite/corpus/grid-footer-relative-row-sizes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, m, page, pct, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          { rows: [pct(30), pct(30), auto] },
          inline`C`,
          inline`C`,
          table.footer(inline(strong(inline`A`)), inline(strong(inline`B`))),
        ),
      ),
    ),
  )
}
