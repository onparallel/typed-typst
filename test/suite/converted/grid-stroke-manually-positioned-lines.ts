// Converted from test/suite/corpus/grid-stroke-manually-positioned-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blue, doc, em, green, inline, m, page, pt, red, set, table, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(5) }),
      inline(
        table(
          { columns: 3, inset: pt(3) },
          table.hline({ y: 0, end: null, stroke: add(pt(3), blue) }),
          table.vline({ x: 0, end: null, stroke: add(pt(3), green) }),
          table.hline({ y: 5, end: null, stroke: add(pt(3), red) }),
          table.vline({ x: 3, end: null, stroke: add(pt(3), yellow) }),
          inline`a`,
          inline`b`,
          inline`c`,
          inline`a`,
          inline`b`,
          inline`c`,
          inline`a`,
          inline`b`,
          inline`c`,
          inline`a`,
          inline`b`,
          inline`c`,
          inline`a`,
          inline`b`,
          inline`c`,
        ),
      ),
    ),
  )
}
