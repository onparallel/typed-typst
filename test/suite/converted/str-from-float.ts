// Converted from test/suite/corpus/str-from-float.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, float, inline, minus, space, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(str(float(12)), '12'),
      space,
      test(str(3.14), '3.14'),
      space,
      test(str(float(1234567890)), '1234567890'),
      space,
      test(str(float(123456789)), '123456789'),
      space,
      test(str(float(0)), '0'),
      space,
      test(str(float('-0.0')), '0'),
      space,
      test(str(float(-1)), '−1'),
      space,
      test(str(float(-9876543210)), '−9876543210'),
      space,
      test(str(float(-987654321)), '−987654321'),
      space,
      test(str(-3.14), '−3.14'),
      space,
      test(str(minus(float(4), float(8))), '−4'),
    ),
  )
}
