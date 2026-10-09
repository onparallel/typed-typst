// Converted from test/suite/corpus/grid-header-lack-of-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, lorem, page, pt, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: em(8) }),
    inline(
      table(
        { rows: [auto, em(2.5), auto, auto, em(10)], gutter: pt(3) },
        table.header(inline(strong(inline`Hello`)), inline(strong(inline`World`))),
        table.cell({ rowspan: 3 }, lorem(80)),
      ),
    ),
  )
}
