// Converted from test/suite/corpus/grid-rtl-multiple-regions.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, em, grid, inline, linebreak, m, page, red, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      set(text, { dir: rtl }),
      inline(
        grid(
          { stroke: red, fill: aqua, columns: 4 },
          inline`a`,
          inline`b`,
          inline`c`,
          inline`d`,
          inline`a`,
          grid.cell({ colspan: 2 }, inline`e, f, g, h, i`),
          inline`f`,
          inline`e`,
          inline`g`,
          grid.cell({ colspan: 2 }, inline`eee${linebreak()} e${linebreak()} e${linebreak()} e`),
          grid.cell({ colspan: 4 }, inline`eeee e e e`),
        ),
      ),
    ),
  )
}
