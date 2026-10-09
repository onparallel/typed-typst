// Converted from test/suite/corpus/grid-cell-show-emph.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, emph, grid, inline, pt, show } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock(
        [show(grid.cell, emph)],
        grid({ columns: 2, gutter: pt(3) }, inline`Hello`, inline`World`, inline`Sweet`, inline`Italics`),
      ),
    ),
  )
}
