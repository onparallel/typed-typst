// Converted from test/suite/corpus/calc-binom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.binom(0, 0), 1),
      space,
      test(calc.binom(5, 3), 10),
      space,
      test(calc.binom(5, 5), 1),
      space,
      test(calc.binom(5, 6), 0),
      space,
      test(calc.binom(6, 2), 15),
    ),
  )
}
