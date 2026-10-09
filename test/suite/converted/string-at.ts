// Converted from test/suite/corpus/string-at.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('Hello').at(1), 'e'),
      space,
      test(data('Hello').at(4), 'o'),
      space,
      test(data('Hello').at(-1), 'o'),
      space,
      test(data('Hello').at(-2), 'l'),
      space,
      test(data('Hey: 🏳️‍🌈 there!').at(5), '🏳️‍🌈'),
    ),
  )
}
