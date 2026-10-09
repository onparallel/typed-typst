// Converted from test/suite/corpus/enum-numbering-reversed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, m, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(enum_, { reversed: true }), m.enum(m.item(['Coffee']), m.item(['Tea']), m.item(['Milk']))))
}
