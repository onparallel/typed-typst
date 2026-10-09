// Converted from test/suite/corpus/grid-header-footer-block-with-fixed-height.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, block, doc, em, inline, m, page, red, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(17) }),
      inline(
        table(
          { rows: [auto, em(2.5), auto] },
          table.header(inline(strong(inline`Hello`)), inline(strong(inline`World`))),
          block({ width: em(2), height: em(10), fill: red }),
          table.footer(inline(strong(inline`Bye`)), inline(strong(inline`World`))),
        ),
      ),
    ),
  )
}
