// Converted from test/suite/corpus/logical-children-tags-decorations-in-broken-grid-cell.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, lorem, m, overline, page, pt, set, space, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(50) }),
      inline(
        grid({ columns: 2 }, underline(inline(space, lorem(10), space)), overline(inline(space, lorem(10), space))),
      ),
    ),
  )
}
