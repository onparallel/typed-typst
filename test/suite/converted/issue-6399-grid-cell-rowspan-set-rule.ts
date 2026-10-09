// Converted from test/suite/corpus/issue-6399-grid-cell-rowspan-set-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(grid.cell, { rowspan: 2 }), inline(grid({ columns: 2 }, inline`hehe`))))
}
