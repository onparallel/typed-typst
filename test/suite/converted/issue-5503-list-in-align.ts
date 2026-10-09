// Converted from test/suite/corpus/issue-5503-list-in-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blocks, doc, inline, list, m, right, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(list, inline`List`),
      m.list(m.item(['a']), m.item(['b'])),
      inline(align(right, blocks(m.list(m.item(['i']))))),
      m.list(m.item(['j'])),
    ),
  )
}
