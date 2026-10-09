// Converted from test/suite/corpus/grid-rowspan-in-all-columns-stroke-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blue, doc, green, inline, pt, red, table, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      table(
        { columns: 2, gutter: pt(3) },
        table.cell({ stroke: { bottom: red } }, inline`a`),
        inline`b`,
        table.hline({ stroke: green }),
        table.cell(
          { stroke: { top: yellow, left: green, right: aqua, bottom: blue }, colspan: 1, rowspan: 2 },
          inline`d`,
        ),
        table.cell({ colspan: 1, rowspan: 2 }, inline`e`),
        inline`f`,
        inline`g`,
      ),
    ),
  )
}
