// Converted from test/suite/corpus/float-is-infinite.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, float, inline, neg, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(float(calc.inf).isInfinite(), true),
      space,
      test(float(neg(calc.inf)).isInfinite(), true),
      space,
      test(float(10).isInfinite(), false),
      space,
      test(float(-10).isInfinite(), false),
      space,
      test(float(float.nan).isInfinite(), false),
    ),
  )
}
