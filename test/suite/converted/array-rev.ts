// Converted from test/suite/corpus/array-rev.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, range } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(range(3).rev(), [2, 1, 0])))
}
