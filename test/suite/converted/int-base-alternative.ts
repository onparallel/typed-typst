// Converted from test/suite/corpus/int-base-alternative.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(16, 16), space, test(13, 13), space, test(add(10, 10), 20)))
}
