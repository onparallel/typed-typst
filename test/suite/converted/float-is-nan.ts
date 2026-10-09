// Converted from test/suite/corpus/float-is-nan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, float, inline, neg, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(float(float.nan).isNan(), true),
      space,
      test(float(10).isNan(), false),
      space,
      test(float(calc.inf).isNan(), false),
      space,
      test(float(neg(calc.inf)).isNan(), false),
    ),
  )
}
