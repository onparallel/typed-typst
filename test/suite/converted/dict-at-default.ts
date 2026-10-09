// Converted from test/suite/corpus/dict-at-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data({ a: 1, b: 2 }).at({ default: 3 }, 'b'), 2),
      space,
      test(data({ a: 1, b: 2 }).at({ default: 3 }, 'c'), 3),
    ),
  )
}
