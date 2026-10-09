// Converted from test/suite/corpus/list-tags-mixed-with-enum.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item(m.lines('a', m.enum(m.item(['1'])))),
      m.item(m.lines('b', m.enum(m.item(m.lines('c', m.list(m.item(['d'])))), m.item(['e'])))),
      m.item(['f']),
    ),
  )
}
