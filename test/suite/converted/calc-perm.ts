// Converted from test/suite/corpus/calc-perm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.perm(0, 0), 1),
      space,
      test(calc.perm(5, 3), 60),
      space,
      test(calc.perm(5, 5), 120),
      space,
      test(calc.perm(5, 6), 0),
    ),
  )
}
