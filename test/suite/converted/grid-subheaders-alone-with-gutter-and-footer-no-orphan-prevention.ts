// Converted from test/suite/corpus/grid-subheaders-alone-with-gutter-and-footer-no-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, page, pt, set, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5.5) }),
      inline(
        table(
          { gutter: pt(4) },
          table.header(inline`L1`),
          table.header({ level: 2 }, inline`L2`),
          table.footer(inline`a`),
        ),
      ),
    ),
  )
}
