// Converted from test/suite/corpus/calc-erf.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, neg, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.erf(0), 0),
      space,
      test(calc.erf(1), 0.8427007929497149),
      space,
      test(calc.erf(calc.inf), 1),
      space,
      test(calc.erf(-1), neg(calc.erf(1))),
    ),
  )
}
