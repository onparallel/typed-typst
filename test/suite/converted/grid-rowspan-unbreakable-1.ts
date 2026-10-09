// Converted from test/suite/corpus/grid-rowspan-unbreakable-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, em, inline, linebreak, pt, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 3, rows: [auto, auto, auto, em(2)], gutter: pt(3) },
        table.cell({ rowspan: 4 }, inline`a ${linebreak()} b${linebreak()} c${linebreak()} d${linebreak()} e`),
        inline`c`,
        inline`d`,
        inline`e`,
        table.cell({ breakable: false, rowspan: 2 }, inline`f`),
        inline`g`,
      ),
    ),
  )
}
