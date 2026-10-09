// Converted from test/suite/corpus/grid-subheaders-too-large-non-repeating-orphan-before-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, linebreak, m, page, set, space, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          grid.header(inline`1`),
          grid.header({ level: 2, repeat: false }, times(inline`a${linebreak()}${space}`, 2)),
          grid.header({ level: 3 }, inline`2`),
          inline`b${linebreak()} b${linebreak()} b`,
        ),
      ),
    ),
  )
}
