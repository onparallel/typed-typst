// Converted from test/suite/corpus/grid-inset-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, m, pt, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(grid, { inset: pt(10) }), set(grid, { inset: { left: pt(0) } })),
    inline(grid({ fill: red, inset: { right: pt(0) } }, grid.cell({ inset: { top: pt(0) } }, inline`a`))),
  )
}
