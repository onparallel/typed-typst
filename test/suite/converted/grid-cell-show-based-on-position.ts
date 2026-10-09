// Converted from test/suite/corpus/grid-cell-show-based-on-position.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, grid, inline, pt, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock(
        [
          show(
            grid.cell,
            (it, ctx) => unsafeRaw.code<any>`{
    if it.y == 0 {
      strong(it)
    } else if it.x == 1 {
      emph(it)
    } else {
      it
    }
  }`,
          ),
        ],
        grid(
          { columns: 3, gutter: pt(3) },
          inline`Name`,
          inline`Age`,
          inline`Info`,
          inline`John`,
          inline`52`,
          inline`Nice`,
          inline`Mary`,
          inline`50`,
          inline`Cool`,
          inline`Jake`,
          inline`49`,
          inline`Epic`,
        ),
      ),
    ),
  )
}
