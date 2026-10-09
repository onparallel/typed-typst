// Converted from test/suite/corpus/grid-cell-position-automatic-skip-manual.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(grid(grid.cell({ x: 0, y: 0 }, inline`This shall not error`), inline`A`)))
}
