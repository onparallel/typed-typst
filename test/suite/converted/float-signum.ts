// Converted from test/suite/corpus/float-signum.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, float, inline, neg, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(float(float(0)).signum(), float(1)),
      space,
      test(float(float(1)).signum(), float(1)),
      space,
      test(float(float(-1)).signum(), float(-1)),
      space,
      test(float(float(10)).signum(), float(1)),
      space,
      test(float(float(-10)).signum(), float(-1)),
      space,
      test(float(calc.inf).signum(), float(1)),
      space,
      test(float(neg(calc.inf)).signum(), float(-1)),
      space,
      test(float(float.nan).signum().isNan(), true),
    ),
  )
}
