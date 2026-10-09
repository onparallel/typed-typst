// Converted from test/suite/corpus/list-tags-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      m.item(m.lines('a', m.list(m.item(['1'])))),
      m.item(m.lines('b', m.list(m.item(m.lines('c', m.list(m.item(['d'])))), m.item(['e'])))),
      m.item(['f']),
    ),
  )
}
