// Converted from test/suite/corpus/str-from-int.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, minus, space, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(str(12), '12'),
      space,
      test(str(1234567890), '1234567890'),
      space,
      test(str(123456789), '123456789'),
      space,
      test(str(0), '0'),
      space,
      test(str(-0), '0'),
      space,
      test(str(-1), '−1'),
      space,
      test(str(-9876543210), '−9876543210'),
      space,
      test(str(-987654321), '−987654321'),
      space,
      test(str(minus(4, 8)), '−4'),
    ),
  )
}
