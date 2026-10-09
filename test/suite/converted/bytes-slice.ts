// Converted from test/suite/corpus/bytes-slice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(bytes('abcd').slice(2), bytes('cd')),
      space,
      test(bytes('abcd').slice(0, 3), bytes('abc')),
      space,
      test(bytes('abcd').slice(1, -1), bytes('bc')),
      space,
      test(bytes('abcd').slice(3, 3), bytes('')),
      space,
      test(bytes('abcd').slice(3, 0), bytes('')),
      space,
      test(bytes('abcd').slice(-2), bytes('cd')),
      space,
      test(bytes('abcd').slice(-3, 2), bytes('b')),
      space,
      test(bytes('abcd').slice(-3, -1), bytes('bc')),
      space,
      test(bytes('abcd').slice(-2, -2), bytes('')),
      space,
      test(bytes('abcd').slice({ count: 3 }, 1), bytes('bcd')),
      space,
      test(bytes('abcd').slice({ count: 3 }, -3), bytes('bcd')),
      space,
      test(bytes('abcd').slice({ count: 0 }, 2), bytes('')),
    ),
  )
}
