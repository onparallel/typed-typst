// Converted from test/suite/corpus/grid-header-too-large-repeating-orphan-with-footer.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, linebreak, m, page, set, space, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          grid.header({ repeat: true }, times(inline`a${linebreak()}${space}`, 5)),
          inline`b`,
          grid.footer({ repeat: true }, inline`c`),
        ),
      ),
    ),
  )
}
