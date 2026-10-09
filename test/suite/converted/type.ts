// Converted from test/suite/corpus/type.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, direction, div, doc, float, inline, int, ltr, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(type(1), int), space, test(type(ltr), direction), space, test(type(div(10, 3)), float)))
}
