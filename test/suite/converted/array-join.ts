// Converted from test/suite/corpus/array-join.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data([]).join(), null),
      space,
      test(data([1]).join(), 1),
      space,
      test(data(['a', 'b', 'c']).join(), 'abc'),
      space,
      test(add(add('(', data(['a', 'b', 'c']).join(', ')), ')'), '(a, b, c)'),
    ),
  )
}
