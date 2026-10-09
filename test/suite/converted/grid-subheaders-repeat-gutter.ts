// Converted from test/suite/corpus/grid-subheaders-repeat-gutter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, grid, inline, m, page, pt, set, spread, times } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(8) }),
      inline(
        grid(
          { inset: { bottom: pt(0.5) }, stroke: { bottom: pt(1) }, gutter: [pt(1), pt(6), pt(1)] },
          grid.header(inline`a`),
          grid.header({ level: 2 }, inline`b`),
          spread(times([inline`c`], 10)),
        ),
      ),
    ),
  )
}
