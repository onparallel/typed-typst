// Converted from test/suite/corpus/enum-number-align-unfolded-mixed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, enum_, m, set, times, top } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(align, { alignment: center }), set(enum_, { numberAlign: top, numbering: (n) => times('1', n) })),
    m.enum(m.item(['abc']), m.item(['abc']), m.item(['abc'])),
  )
}
