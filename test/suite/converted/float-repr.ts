// Converted from test/suite/corpus/float-repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, float, inline, minus, neg, repr, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(repr(float(12)), '12.0'),
      space,
      test(repr(3.14), '3.14'),
      space,
      test(repr(float(1234567890)), '1234567890.0'),
      space,
      test(repr(float(123456789)), '123456789.0'),
      space,
      test(repr(float(0)), '0.0'),
      space,
      test(repr(float('-0.0')), '-0.0'),
      space,
      test(repr(float(-1)), '-1.0'),
      space,
      test(repr(float(-9876543210)), '-9876543210.0'),
      space,
      test(repr(float(-987654321)), '-987654321.0'),
      space,
      test(repr(-3.14), '-3.14'),
      space,
      test(repr(minus(float(4), float(8))), '-4.0'),
      space,
      test(repr(float.inf), 'float.inf'),
      space,
      test(repr(neg(float.inf)), '-float.inf'),
      space,
      test(repr(float.nan), 'float.nan'),
    ),
  )
}
