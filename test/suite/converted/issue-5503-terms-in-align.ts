// Converted from test/suite/corpus/issue-5503-terms-in-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, blocks, doc, inline, m, right, show, terms } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(terms, inline`Terms`),
      m.terms(m.term(['a'], ['a'])),
      inline(align(right, blocks(m.terms(m.term(['i'], ['i']))))),
      m.terms(m.term(['j'], ['j'])),
    ),
  )
}
