// Converted from test/suite/corpus/array-intersperse.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).intersperse('a'), []),
      space,
      test(data([1]).intersperse('a'), [1]),
      space,
      test(data([1, 2]).intersperse('a'), [1, 'a', 2]),
      space,
      test(data([1, 2, 'b']).intersperse('a'), [1, 'a', 2, 'a', 'b']),
    ),
  )
}
