// Converted from test/suite/corpus/grid-header-and-footer-lack-of-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, doc, em, inline, lorem, page, pt, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: add(add(em(9), em(2.5)), em(1.5)) }),
    inline(
      table(
        { rows: [auto, em(2.5), auto, auto, em(10), em(2.5), auto], gutter: pt(3) },
        table.header(inline(strong(inline`Hello`)), inline(strong(inline`World`))),
        table.cell({ rowspan: 3 }, lorem(30)),
        table.footer(inline(strong(inline`Ok`)), inline(strong(inline`Bye`))),
      ),
    ),
  )
}
