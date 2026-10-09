// Converted from test/suite/corpus/array-map.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        data([]).map((x) => times(x, 2)),
        [],
      ),
      space,
      test(
        data([2, 3]).map((x_2) => times(x_2, 2)),
        [4, 6],
      ),
    ),
  )
}
