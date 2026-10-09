// Converted from test/suite/corpus/string-slice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('abc').slice(1, 2), 'b'),
      space,
      test(data('abc🏡def').slice(2, 7), 'c🏡'),
      space,
      test(data('abc🏡def').slice(2, -2), 'c🏡d'),
      space,
      test(data('abc🏡def').slice(-3, -1), 'de'),
      space,
      test(data('x🏡yz').slice({ count: 2 }, -2), 'yz'),
      space,
      test(data('x🏡yz').slice({ count: 7 }, -7), 'x🏡yz'),
    ),
  )
}
