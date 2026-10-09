// Converted from test/suite/corpus/calc-quo.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.quo(1, 1), 1),
      space,
      test(calc.quo(5, 3), 1),
      space,
      test(calc.quo(5, -3), -2),
      space,
      test(calc.quo(-5, 3), -2),
      space,
      test(calc.quo(-5, -3), 1),
      space,
      test(calc.quo(6, -3), -2),
      space,
      test(calc.quo(-4, 5), -1),
      space,
      test(calc.quo(-4, float(5)), -1),
      space,
      test(calc.quo(22.5, 10), 2),
      space,
      test(calc.quo(9, 4.5), 2),
      space,
      test(calc.quo(decimal('22.5'), 10), 2),
      space,
      test(calc.quo(decimal('9'), decimal('4.5')), 2),
      space,
      test(calc.quo(decimal('-9'), decimal('4.1')), -3),
    ),
  )
}
