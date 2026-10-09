// Converted from test/suite/corpus/enum-number-override-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.enum(
      { tight: false },
      m.numbered(0, ['Before first!']),
      m.numbered(1, m.lines('First.', m.enum(m.numbered(2, ['Indented'])))),
      m.item(['Second']),
    ),
  )
}
