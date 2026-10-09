// Converted from test/suite/corpus/grid-subheaders-non-repeating-header-before-multi-page-row.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { colbreak, doc, em, grid, inline, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: em(6) }),
      inline(grid(grid.header({ repeat: false }, inline`h`), inline`row ${colbreak()} row`)),
    ),
  )
}
