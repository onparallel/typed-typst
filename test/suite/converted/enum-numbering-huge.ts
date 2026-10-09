// Converted from test/suite/corpus/enum-numbering-huge.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.enum(m.numbered(100000000001, ['A']), m.item(['B'])))
}
