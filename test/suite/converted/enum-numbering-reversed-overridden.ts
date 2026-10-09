// Converted from test/suite/corpus/enum-numbering-reversed-overridden.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { reversed: true }),
      m.enum(m.item(['A']), m.item(['B']), m.item(['C']), m.numbered(9, ['D']), m.item(['E']), m.item(['F'])),
    ),
  )
}
