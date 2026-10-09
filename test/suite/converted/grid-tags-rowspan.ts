// Converted from test/suite/corpus/grid-tags-rowspan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt, raw, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 4, stroke: pt(1), rows: 3 },
        grid.cell({ rowspan: 3 }, inline(raw('code'))),
        inline`b`,
        inline`c`,
        inline`d`,
        inline`b`,
        grid.cell({ x: 2, y: 1, colspan: 2, rowspan: 2 }, underline(inline`text`)),
        inline`b`,
      ),
    ),
  )
}
