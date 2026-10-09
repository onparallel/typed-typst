// Converted from test/suite/corpus/field-function.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assert, doc, enum_, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(enum_.item, space, assert.eq, space, assert.ne))
}
