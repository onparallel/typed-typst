// Converted from test/suite/corpus/grid-header-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(grid(grid.header(inline`a`), grid.header(inline`b`), inline`a`)))
}
