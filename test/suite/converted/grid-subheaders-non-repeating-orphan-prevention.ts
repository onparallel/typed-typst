// Converted from test/suite/corpus/grid-subheaders-non-repeating-orphan-prevention.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, set, space, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        v(em(4.5)),
        space,
        grid(
          grid.header({ repeat: false, level: 2 }, inline`L2`),
          grid.header({ repeat: false, level: 4 }, inline`L4`),
          inline`a`,
        ),
      ),
    ),
  )
}
