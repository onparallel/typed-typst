// Converted from test/suite/corpus/calc-div-euclid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.divEuclid(7, 3), 2),
      space,
      test(calc.divEuclid(7, -3), -2),
      space,
      test(calc.divEuclid(-7, 3), -3),
      space,
      test(calc.divEuclid(-7, -3), 3),
      space,
      test(calc.divEuclid(2.5, 2), 1),
      space,
      test(calc.divEuclid(decimal('7'), decimal('3')), decimal('2')),
      space,
      test(calc.divEuclid(decimal('7'), decimal('-3')), decimal('-2')),
      space,
      test(calc.divEuclid(decimal('-7'), decimal('3')), decimal('-3')),
      space,
      test(calc.divEuclid(decimal('-7'), decimal('-3')), decimal('3')),
      space,
      test(calc.divEuclid(decimal('2.5'), decimal('2')), decimal('1')),
    ),
  )
}
