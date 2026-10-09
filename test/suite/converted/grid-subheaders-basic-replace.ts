// Converted from test/suite/corpus/grid-subheaders-basic-replace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      grid(
        grid.header(inline`a`),
        inline`x`,
        grid.header({ level: 2 }, inline`b`),
        inline`y`,
        grid.header({ level: 2 }, inline`c`),
        inline`z`,
      ),
    ),
  )
}
