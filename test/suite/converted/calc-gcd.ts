// Converted from test/suite/corpus/calc-gcd.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.gcd(112, 77), 7),
      space,
      test(calc.gcd(12, 96), 12),
      space,
      test(calc.gcd(13, 9), 1),
      space,
      test(calc.gcd(13, -9), 1),
      space,
      test(calc.gcd(272557, 272557), 272557),
      space,
      test(calc.gcd(0, 0), 0),
      space,
      test(calc.gcd(7, 0), 7),
    ),
  )
}
