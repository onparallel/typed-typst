// Converted from test/suite/corpus/grid-header-replace-orphan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, strong } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        grid(
          grid.header(inline(strong(inline`Abc`))),
          inline`a`,
          inline`b`,
          grid.header(inline(strong(inline`Def`))),
          inline`d`,
          inline`e`,
          inline`f`,
        ),
      ),
    ),
  )
}
