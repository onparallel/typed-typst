// Converted from test/suite/corpus/calc-even-and-odd.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.even(2), true),
      space,
      test(calc.odd(2), false),
      space,
      test(calc.odd(-1), true),
      space,
      test(calc.even(-11), false),
    ),
  )
}
