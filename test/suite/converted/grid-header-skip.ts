// Converted from test/suite/corpus/grid-header-skip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        { columns: 2 },
        inline`x`,
        inline`y`,
        grid.header(inline`a`),
        grid.header(inline`b`),
        grid.cell({ x: 1 }, inline`c`),
        inline`d`,
        grid.header(inline`e`),
        inline`f`,
        grid.cell({ x: 1 }, inline`g`),
      ),
    ),
  )
}
