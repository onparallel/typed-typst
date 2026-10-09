// Converted from test/suite/corpus/issue-5503-enum-in-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blocks, doc, inline, m, right } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.enum(m.item(['a']), m.item(['b'])),
      inline(align(right, blocks(m.enum(m.item(['c']))))),
      m.enum(m.item(['d'])),
    ),
  )
}
