// Converted from test/suite/corpus/str-from-decimal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, decimal, define, doc, inline, minus, space, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(str(decimal('12')), '12'),
      space,
      test(str(decimal('12.0')), '12.0'),
      space,
      test(str(decimal('3.14')), '3.14'),
      space,
      test(str(decimal('1234567890.0')), '1234567890.0'),
      space,
      test(str(decimal('0123456789.0')), '123456789.0'),
      space,
      test(str(decimal('0.0')), '0.0'),
      space,
      test(str(decimal('-0.0')), '0.0'),
      space,
      test(str(decimal('-1.0')), '−1.0'),
      space,
      test(str(decimal('-9876543210.0')), '−9876543210.0'),
      space,
      test(str(decimal('-0987654321.0')), '−987654321.0'),
      space,
      test(str(decimal('-3.14')), '−3.14'),
      space,
      test(str(decimal('-3.9191919191919191919191919195')), '−3.9191919191919191919191919195'),
      space,
      test(str(decimal('5.0000000000')), '5.0000000000'),
      space,
      test(str(minus(decimal('4.0'), decimal('8.0'))), '−4.0'),
      space,
      test(str(minus(decimal('4'), decimal('8'))), '−4'),
    ),
  )
}
