// Converted from test/suite/corpus/array-enumerate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).enumerate(), []),
      space,
      test(data([]).enumerate({ start: 5 }), []),
      space,
      test(data(['a', 'b', 'c']).enumerate(), [
        [0, 'a'],
        [1, 'b'],
        [2, 'c'],
      ]),
      space,
      test(data(['a', 'b', 'c']).enumerate({ start: 1 }), [
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ]),
      space,
      test(data(['a', 'b', 'c']).enumerate({ start: 42 }), [
        [42, 'a'],
        [43, 'b'],
        [44, 'c'],
      ]),
      space,
      test(data(['a', 'b', 'c']).enumerate({ start: -7 }), [
        [-7, 'a'],
        [-6, 'b'],
        [-5, 'c'],
      ]),
    ),
  )
}
