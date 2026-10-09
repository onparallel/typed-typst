// Converted from test/suite/corpus/calc-rem-euclid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.remEuclid(7, 3), 1),
      space,
      test(calc.remEuclid(7, -3), 1),
      space,
      test(calc.remEuclid(-7, 3), 2),
      space,
      test(calc.remEuclid(-7, -3), 2),
      space,
      test(calc.remEuclid(2.5, 2), 0.5),
      space,
      test(calc.remEuclid(decimal('7'), decimal('3')), decimal('1')),
      space,
      test(calc.remEuclid(decimal('7'), decimal('-3')), decimal('1')),
      space,
      test(calc.remEuclid(decimal('-7'), decimal('3')), decimal('2')),
      space,
      test(calc.remEuclid(decimal('-7'), decimal('-3')), decimal('2')),
      space,
      test(calc.remEuclid(decimal('2.5'), decimal('2')), decimal('0.5')),
    ),
    inline(
      test(calc.remEuclid(unsafeRaw.code<any>`int.min`, -1), 0),
      space,
      test(calc.remEuclid(float(unsafeRaw.code<any>`int.min`), float(-1)), float(0)),
    ),
  )
}
