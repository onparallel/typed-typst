// Converted from test/suite/corpus/issue-6399-grid-cell-colspan-set-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(grid.cell, { colspan: 2 }), inline(grid({ columns: 3 }, inline`hehe`))))
}
