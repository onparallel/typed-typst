// Converted from test/suite/corpus/array-product.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).product({ default: 0 }), 0),
      space,
      test(data([]).product({ default: inline() }), inline()),
      space,
      test(data([inline`ab`, 3]).product(), times(inline`ab`, 3)),
      space,
      test(data([1, 2, 3]).product(), 6),
    ),
  )
}
