// Converted from test/suite/corpus/enum-numbering-closure-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, inline, m, set, super_ } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { numbering: (n) => super_(inline(n)) }),
      m.enum(m.item(m.lines('A', m.enum(m.item(['B'])))), m.item(['C'])),
    ),
  )
}
