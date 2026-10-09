// Converted from test/suite/corpus/array-windows.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).windows(5), []),
      space,
      test(data([1, 2, 3]).windows(5), []),
      space,
      test(data([1, 2, 3, 4, 5]).windows(3), [
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
      ]),
      space,
      test(data([1, 2, 3, 4, 5, 6, 7, 8]).windows(5), [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7],
        [4, 5, 6, 7, 8],
      ]),
    ),
  )
}
