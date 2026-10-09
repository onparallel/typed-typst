// Converted from test/suite/corpus/grid-header-and-large-auto-contiguous.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, auto, block, doc, em, inline, page, pct, pt, red, set, strong, table } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: em(15) }),
    inline(
      table(
        { rows: [auto, em(4.5), auto], gutter: pt(3), inset: pt(0) },
        table.header(inline(strong(inline`H`)), inline(strong(inline`W`))),
        block({ height: add(add(em(2.5), em(2)), em(20)), width: pct(100), fill: red }),
      ),
    ),
  )
}
