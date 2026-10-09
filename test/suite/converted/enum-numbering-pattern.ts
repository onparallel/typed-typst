// Converted from test/suite/corpus/enum-numbering-pattern.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { numbering: '(1.a.*)' }),
      m.enum(
        m.item(['First']),
        m.item(m.lines('Second', m.enum(m.numbered(2, m.lines('Nested', m.enum(m.item(['Deep']))))))),
        m.item(['Normal']),
      ),
    ),
  )
}
