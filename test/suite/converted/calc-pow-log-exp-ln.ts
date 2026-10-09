// Converted from test/suite/corpus/calc-pow-log-exp-ln.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.pow(10, 0), 1),
      space,
      test(calc.pow(2, 4), 16),
      space,
      test(calc.pow(decimal('0.5'), 18), decimal('0.000003814697265625')),
      space,
      test(calc.exp(2), calc.pow(calc.e, 2)),
      space,
      test(calc.ln(10), calc.log({ base: calc.e }, 10)),
    ),
  )
}
