// Converted from test/suite/corpus/array-first-and-last.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([1]).first(), 1),
      space,
      test(data([2]).last(), 2),
      space,
      test(data([1, 2, 3]).first(), 1),
      space,
      test(data([1, 2, 3]).last(), 3),
      space,
      test(data([1, 2]).first({ default: 99 }), 1),
      space,
      test(data([]).first({ default: 99 }), 99),
      space,
      test(data([1, 2]).last({ default: 99 }), 2),
      space,
      test(data([]).last({ default: 99 }), 99),
    ),
  )
}
