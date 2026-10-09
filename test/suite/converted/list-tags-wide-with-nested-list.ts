// Converted from test/suite/corpus/list-tags-wide-with-nested-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      { tight: false },
      m.item(['a'], m.list(m.item(['1']))),
      m.item(['b'], m.list({ tight: false }, m.item(['c'], m.list(m.item(['d']))), m.item(['e']))),
      m.item(['f']),
    ),
  )
}
