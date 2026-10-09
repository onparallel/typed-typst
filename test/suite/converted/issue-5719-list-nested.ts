// Converted from test/suite/corpus/issue-5719-list-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item(['A']),
      m.item([], m.list(m.item(['B']), m.item(['C']))),
      m.item([], m.lines(m.heading(1, 'D'), 'E')),
    ),
  )
}
