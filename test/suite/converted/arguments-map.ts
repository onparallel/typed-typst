// Converted from test/suite/corpus/arguments-map.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, define, doc, inline, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        arguments_().map((x) => times(x, 2)),
        arguments_(),
      ),
      space,
      test(
        arguments_({ a: 3 }, 2).map((x_2) => times(x_2, 2)),
        arguments_({ a: 6 }, 4),
      ),
    ),
  )
}
