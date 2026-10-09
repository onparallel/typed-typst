// Converted from test/suite/corpus/array-zip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, array, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).zip([]), []),
      space,
      test(data([1]).zip([]), []),
      space,
      test(data([1]).zip([2]), [[1, 2]]),
      space,
      test(data([1, 2]).zip([3, 4]), [
        [1, 3],
        [2, 4],
      ]),
      space,
      test(data([1, 2]).zip({ exact: true }, [3, 4]), [
        [1, 3],
        [2, 4],
      ]),
      space,
      test(data([1, 2, 3, 4]).zip([5, 6]), [
        [1, 5],
        [2, 6],
      ]),
      space,
      test(data([[1, 2], 3]).zip([4, 5]), [
        [[1, 2], 4],
        [3, 5],
      ]),
      space,
      test(data([1, 'hi']).zip([true, false]), [
        [1, true],
        ['hi', false],
      ]),
      space,
      test(data([1, 2, 3]).zip([3, 4, 5], [6, 7, 8]), [
        [1, 3, 6],
        [2, 4, 7],
        [3, 5, 8],
      ]),
      space,
      test(data([]).zip([], []), []),
      space,
      test(data([1]).zip([2], [3]), [[1, 2, 3]]),
      space,
      test(data([1, 2, 3]).zip(), [[1], [2], [3]]),
      space,
      test(array.zip([]), []),
    ),
  )
}
