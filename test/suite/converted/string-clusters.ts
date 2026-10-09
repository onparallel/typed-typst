// Converted from test/suite/corpus/string-clusters.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('abc').clusters(), ['a', 'b', 'c']),
      space,
      test(data('abc').clusters(), ['a', 'b', 'c']),
      space,
      test(data('🏳️‍🌈!').clusters(), ['🏳️‍🌈', '!']),
    ),
  )
}
