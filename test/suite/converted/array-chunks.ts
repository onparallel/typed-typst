// Converted from test/suite/corpus/array-chunks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).chunks(10), []),
      space,
      test(data([1, 2, 3]).chunks(10), [[1, 2, 3]]),
      space,
      test(data([1, 2, 3, 4, 5, 6]).chunks(3), [
        [1, 2, 3],
        [4, 5, 6],
      ]),
      space,
      test(data([1, 2, 3, 4, 5, 6, 7, 8]).chunks(3), [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
      ]),
    ),
    inline(
      test(data([]).chunks({ exact: true }, 10), []),
      space,
      test(data([1, 2, 3]).chunks({ exact: true }, 10), []),
      space,
      test(data([1, 2, 3, 4, 5, 6]).chunks({ exact: true }, 3), [
        [1, 2, 3],
        [4, 5, 6],
      ]),
      space,
      test(data([1, 2, 3, 4, 5, 6, 7, 8]).chunks({ exact: true }, 3), [
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ),
  )
}
