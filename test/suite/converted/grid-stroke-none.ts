// Converted from test/suite/corpus/grid-stroke-none.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, green, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(grid({ columns: 3, stroke: null, fill: green }, inline`A`, inline`B`, inline`C`)))
}
