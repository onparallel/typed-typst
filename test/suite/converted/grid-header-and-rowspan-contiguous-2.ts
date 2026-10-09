// Converted from test/suite/corpus/grid-header-and-rowspan-contiguous-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, block, doc, em, inline, page, pct, pt, red, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: em(15) }),
    inline(
      table(
        { rows: [auto, em(2.5), em(10), em(5), auto], gutter: pt(3), inset: pt(0) },
        table.header(inline(strong(inline`H`)), inline(strong(inline`W`))),
        table.cell({ rowspan: 3 }, block({ height: add(add(em(2.5), em(2)), em(20)), width: pct(100), fill: red })),
      ),
    ),
  )
}
