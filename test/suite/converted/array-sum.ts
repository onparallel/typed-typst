// Converted from test/suite/corpus/array-sum.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).sum({ default: 0 }), 0),
      space,
      test(data([]).sum({ default: inline() }), inline()),
      space,
      test(data([1, 2, 3]).sum(), 6),
    ),
  )
}
