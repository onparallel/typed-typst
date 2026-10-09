// Converted from test/suite/corpus/array-slice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, range, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([1, 2, 3, 4]).slice(2), [3, 4]),
      space,
      test(range(10).slice(2, 6), [2, 3, 4, 5]),
      space,
      test(range(10).slice({ count: 3 }, 4), [4, 5, 6]),
      space,
      test(range(10).slice({ count: 2 }, -5), [5, 6]),
      space,
      test(data([1, 2, 3]).slice({ count: 3 }, -3), [1, 2, 3]),
      space,
      test(data([1, 2, 3]).slice({ count: 1 }, -1), [3]),
      space,
      test(data([1, 2, 3]).slice(2, -2), []),
      space,
      test(data([1, 2, 3]).slice(-2, 2), [2]),
      space,
      test(data([1, 2, 3]).slice(-3, 2), [1, 2]),
      space,
      test(data('ABCD').split('').slice(1, -1).join('-'), 'A-B-C-D'),
    ),
  )
}
