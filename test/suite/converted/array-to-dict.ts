// Converted from test/suite/corpus/array-to-dict.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).toDict(), data({})),
      space,
      test(
        data([
          ['a', 1],
          ['b', 2],
          ['c', 3],
        ]).toDict(),
        { a: 1, b: 2, c: 3 },
      ),
      space,
      test(
        data([
          ['a', 1],
          ['b', 2],
          ['c', 3],
          ['b', 4],
        ]).toDict(),
        { a: 1, b: 4, c: 3 },
      ),
    ),
  )
}
