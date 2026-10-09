// Converted from test/suite/corpus/calc-min-and-max.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.min(2, -4), -4),
      space,
      test(calc.min(3.5, float(100), -0.1, 3), -0.1),
      space,
      test(calc.min(decimal('3.5'), 4, decimal('-3213.99999')), decimal('-3213.99999')),
      space,
      test(calc.max(-3, 11), 11),
      space,
      test(calc.max(decimal('3'), 45), 45),
      space,
      test(calc.min('hi'), 'hi'),
    ),
  )
}
