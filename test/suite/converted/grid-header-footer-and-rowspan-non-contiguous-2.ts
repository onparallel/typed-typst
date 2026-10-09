// Converted from test/suite/corpus/grid-header-footer-and-rowspan-non-contiguous-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, lorem, page, pt, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: em(20) }),
    inline(
      table(
        { rows: [auto, em(2.5), em(2), auto], gutter: pt(3) },
        table.header(inline(strong(inline`Hello`)), inline(strong(inline`World`))),
        table.cell({ rowspan: 3 }, lorem(20)),
        table.footer(inline(strong(inline`Ok`)), inline(strong(inline`Bye`))),
      ),
    ),
  )
}
