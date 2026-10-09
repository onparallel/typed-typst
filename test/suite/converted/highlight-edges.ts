// Converted from test/suite/corpus/highlight-edges.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, m, set, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(highlight, { topEdge: 'x-height', bottomEdge: 'baseline' }),
      inline`${highlight(inline`ace`)}, ${highlight(inline`base`)}, ${highlight(inline`super`)}, ${highlight(inline`phone ${sym.integral}`)}`,
    ),
  )
}
