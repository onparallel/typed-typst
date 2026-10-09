// Converted from test/suite/corpus/grid-header-not-at-first-row-two-columns.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(grid({ columns: 2 }, inline`a`, grid.header(inline`b`))))
}
