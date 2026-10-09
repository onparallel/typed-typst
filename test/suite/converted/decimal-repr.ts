// Converted from test/suite/corpus/decimal-repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, decimal, define, doc, inline, minus, repr, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(repr(decimal('12.0')), 'decimal("12.0")'),
      space,
      test(repr(decimal('3.14')), 'decimal("3.14")'),
      space,
      test(repr(decimal('1234567890.0')), 'decimal("1234567890.0")'),
      space,
      test(repr(decimal('0123456789.0')), 'decimal("123456789.0")'),
      space,
      test(repr(decimal('0.0')), 'decimal("0.0")'),
      space,
      test(repr(decimal('-0.0')), 'decimal("0.0")'),
      space,
      test(repr(decimal('-1.0')), 'decimal("-1.0")'),
      space,
      test(repr(decimal('-9876543210.0')), 'decimal("-9876543210.0")'),
      space,
      test(repr(decimal('-0987654321.0')), 'decimal("-987654321.0")'),
      space,
      test(repr(decimal('-3.14')), 'decimal("-3.14")'),
      space,
      test(repr(decimal('-3.9191919191919191919191919195')), 'decimal("-3.9191919191919191919191919195")'),
      space,
      test(repr(decimal('5.0000000000')), 'decimal("5.0000000000")'),
      space,
      test(repr(minus(decimal('4.0'), decimal('8.0'))), 'decimal("-4.0")'),
    ),
  )
}
