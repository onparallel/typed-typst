// Converted from test/suite/corpus/array-at-with-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(test(data([1, 2, 3]).at({ default: 5 }, 2), 3), space, test(data([1, 2, 3]).at({ default: 5 }, 3), 5)),
  )
}
