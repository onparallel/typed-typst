// Converted from test/suite/corpus/calc-abs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, pct, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.abs(-3), 3),
      space,
      test(calc.abs(3), 3),
      space,
      test(calc.abs(float('-0.0')), float(0)),
      space,
      test(calc.abs(float(0)), float('-0.0')),
      space,
      test(calc.abs(-3.14), 3.14),
      space,
      test(calc.abs(pct(50)), pct(50)),
      space,
      test(calc.abs(pct(-25)), pct(25)),
      space,
      test(calc.abs(decimal('4932.493249324932')), decimal('4932.493249324932')),
      space,
      test(calc.abs(decimal('-12402.593295932041')), decimal('12402.593295932041')),
    ),
  )
}
