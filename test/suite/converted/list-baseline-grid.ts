// Converted from test/suite/corpus/list-baseline-grid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, grid, inline, m, pt } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item([grid({ inset: pt(10), columns: 2 }, inline`a`, inline`b`, inline`c`, inline`d`)])))
}
