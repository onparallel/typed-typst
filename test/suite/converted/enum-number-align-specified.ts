// Converted from test/suite/corpus/enum-number-align-specified.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, m, set, start } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { numberAlign: start }),
      m.enum(m.numbered(1, ['a']), m.numbered(8, ['b']), m.numbered(16, ['c'])),
    ),
  )
}
