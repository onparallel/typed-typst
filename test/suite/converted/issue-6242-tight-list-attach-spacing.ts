// Converted from test/suite/corpus/issue-6242-tight-list-attach-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, list, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(list, { spacing: em(1.2) }),
      m.list(m.item(m.lines('A', m.list(m.item(['B']), m.item(['C'])))), m.item(['C'])),
    ),
  )
}
