// Converted from test/suite/corpus/enum-item-number-optional.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(enum_.item(inline`First`), space, enum_.item(inline`Second`)))
}
