// Converted from test/suite/corpus/grid-header-last-child.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(grid({ columns: 2, gutter: pt(3) }, grid.header(inline`a`, inline`b`, inline`c`, inline`d`))))
}
