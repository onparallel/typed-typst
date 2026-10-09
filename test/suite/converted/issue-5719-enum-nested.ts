// Converted from test/suite/corpus/issue-5719-enum-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.enum(
      m.numbered(1, ['A']),
      m.numbered(2, [], m.enum(m.numbered(1, ['B']), m.numbered(2, ['C']))),
      m.item([], m.enum(m.item(['D']), m.item(['E']))),
      m.item([], m.lines(m.heading(1, 'F'), 'G')),
    ),
  )
}
