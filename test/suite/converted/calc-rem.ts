// Converted from test/suite/corpus/calc-rem.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.rem(1, 1), 0),
      space,
      test(calc.rem(5, 3), 2),
      space,
      test(calc.rem(5, -3), 2),
      space,
      test(calc.rem(22.5, 10), 2.5),
      space,
      test(calc.rem(9, 4.5), 0),
      space,
      test(calc.rem(decimal('5'), -3), decimal('2')),
      space,
      test(calc.rem(decimal('22.5'), decimal('10')), decimal('2.5')),
      space,
      test(calc.rem(9, decimal('4.5')), decimal('0')),
      space,
      test(calc.rem(decimal('7'), decimal('3')), decimal('1')),
      space,
      test(calc.rem(decimal('7'), decimal('-3')), decimal('1')),
      space,
      test(calc.rem(decimal('-7'), decimal('3')), decimal('-1')),
      space,
      test(calc.rem(decimal('-7'), decimal('-3')), decimal('-1')),
    ),
    inline(
      test(calc.rem(unsafeRaw.code<any>`int.min`, -1), 0),
      space,
      test(calc.rem(float(unsafeRaw.code<any>`int.min`), float(-1)), float(0)),
    ),
  )
}
