// Converted from test/suite/corpus/call-args-trailing-comma.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(add(1, 1), 2)))
}
