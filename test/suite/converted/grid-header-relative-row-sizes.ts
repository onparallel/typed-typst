// Converted from test/suite/corpus/grid-header-relative-row-sizes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, m, page, pct, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(10) }),
      inline(
        table(
          { rows: [pct(30), pct(30), auto] },
          table.header(inline(strong(inline`A`)), inline(strong(inline`B`))),
          inline`C`,
          inline`C`,
        ),
      ),
    ),
  )
}
