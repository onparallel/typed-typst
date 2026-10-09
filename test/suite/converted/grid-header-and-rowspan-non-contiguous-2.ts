// Converted from test/suite/corpus/grid-header-and-rowspan-non-contiguous-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, em, inline, page, pt, set, strong, table } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    set(page, { height: em(15) }),
    inline(
      table(
        { rows: [auto, em(2.5), em(2), auto, em(5)], gutter: pt(3) },
        table.header(inline(strong(inline`Hello`)), inline(strong(inline`World`))),
        table.cell({ rowspan: 3 }, lines(15)),
      ),
    ),
  )
}
