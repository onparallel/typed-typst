// Converted from test/suite/corpus/array-fold.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, data, define, doc, grid, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).fold('hi', grid), 'hi'),
      space,
      test(
        data([1, 2, 3, 4]).fold(0, (s, x) => add(s, x)),
        10,
      ),
    ),
  )
}
