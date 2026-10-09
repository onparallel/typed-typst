// Converted from test/suite/corpus/grid-header-hline-bottom-manually.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, bottom, doc, em, inline, m, page, pt, red, set, table, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(6) }),
      set(text, { size: pt(6) }),
      inline(
        table(
          { columnGutter: pt(3), inset: pt(1) },
          table.header(table.hline({ stroke: red, position: bottom }), inline`a`),
          inline`a`,
          table.cell({ stroke: aqua }, inline`b`),
        ),
      ),
    ),
  )
}
