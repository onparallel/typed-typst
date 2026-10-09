// Converted from test/suite/corpus/enum-number-align-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(m.enum(m.numbered(1, ['a']), m.numbered(10, ['b']), m.numbered(100, ['c'])))
}
