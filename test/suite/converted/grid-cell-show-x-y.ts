// Converted from test/suite/corpus/grid-cell-show-x-y.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, array, assume, codeBlock, doc, grid, inline, pad, pt, show, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock(
        [show(grid.cell, (it, ctx) => [it.x, it.y])],
        grid(
          { columns: 2, inset: pt(5), fill: aqua, gutter: pt(3) },
          inline`Hello`,
          inline`World`,
          inline`Sweet`,
          inline`Home`,
        ),
      ),
      space,
      codeBlock(
        [
          show(table.cell, (it_2, ctx_2) =>
            pad({ rest: assume<'length' | 'ratio' | 'relative'>(it_2.inset) }, inline(array([it_2.x, it_2.y]))),
          ),
        ],
        table({ columns: 2, gutter: pt(3) }, inline`Hello`, inline`World`, inline`Sweet`, inline`Home`),
      ),
    ),
  )
}
