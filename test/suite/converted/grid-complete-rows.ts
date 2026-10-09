// Converted from test/suite/corpus/grid-complete-rows.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, em, grid, inline, red, times } from '../../../src/index.ts'

export default () => {
  return doc(inline(grid({ columns: [em(2), em(2)], rows: times([em(2)], 4), fill: red, stroke: aqua }, inline`a`)))
}
