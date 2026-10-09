// Converted from test/suite/corpus/alignment-type.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, alignment, center, define, doc, horizon, inline, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(type(center), alignment),
      space,
      test(type(horizon), alignment),
      space,
      test(type(add(center, horizon)), alignment),
    ),
  )
}
