// Converted from test/suite/corpus/assert-success.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assert, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(assert(unsafeRaw.code<any>`5 > 3`), space, assert.eq(15, 15), space, assert.ne(10, 12)))
}
