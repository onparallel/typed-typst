// Converted from test/suite/corpus/ops-binary-decimal-int.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, decimal, define, div, doc, inline, minus, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(add(decimal('2359.123456789123456789001234'), 2), decimal('2361.123456789123456789001234')),
      space,
      test(minus(decimal('2359.123456789123456789001234'), 2), decimal('2357.123456789123456789001234')),
      space,
      test(times(decimal('2359.123456789123456789001234'), 2), decimal('4718.246913578246913578002468')),
      space,
      test(div(decimal('2359.123456789123456789001234'), 2), decimal('1179.561728394561728394500617')),
    ),
  )
}
