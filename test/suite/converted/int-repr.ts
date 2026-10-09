// Converted from test/suite/corpus/int-repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, minus, repr, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(repr(12), '12'),
      space,
      test(repr(1234567890), '1234567890'),
      space,
      test(repr(123456789), '123456789'),
      space,
      test(repr(0), '0'),
      space,
      test(repr(-0), '0'),
      space,
      test(repr(-1), '-1'),
      space,
      test(repr(-9876543210), '-9876543210'),
      space,
      test(repr(-987654321), '-987654321'),
      space,
      test(repr(minus(4, 8)), '-4'),
    ),
  )
}
