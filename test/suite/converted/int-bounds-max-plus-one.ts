// Converted from test/suite/corpus/int-bounds-max-plus-one.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, float, inline, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(type(float(9223372036854776000)), float)))
}
