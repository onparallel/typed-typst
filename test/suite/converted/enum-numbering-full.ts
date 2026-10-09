// Converted from test/suite/corpus/enum-numbering-full.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { numbering: '1.a.', full: true }),
      m.enum(m.item(m.lines('First', m.enum(m.item(['Nested']))))),
    ),
  )
}
