// Converted from test/suite/corpus/calc-norm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, div, doc, float, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.norm(1, 2, -3, 0.5), calc.sqrt(14.25)),
      space,
      test(calc.norm(3, 4), float(5)),
      space,
      test(calc.norm(3, 4), float(5)),
      space,
      test(calc.norm(), float(0)),
      space,
      test(calc.norm({ p: 3 }, 1, -2), calc.pow(9, div(1, 3))),
      space,
      test(calc.norm({ p: calc.inf }, 1, -2), float(2)),
      space,
      test(calc.norm({ p: 309 }, 10), 10),
      space,
      test(calc.norm({ p: 2 }, 0), 0),
      space,
      test(calc.norm({ p: 100 }, 1210), 1210),
    ),
  )
}
