// Converted from test/suite/corpus/calc-lcm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.lcm(112, 77), 1232),
      space,
      test(calc.lcm(12, 96), 96),
      space,
      test(calc.lcm(13, 9), 117),
      space,
      test(calc.lcm(13, -9), 117),
      space,
      test(calc.lcm(272557, 272557), 272557),
      space,
      test(calc.lcm(0, 0), 0),
      space,
      test(calc.lcm(8, 0), 0),
    ),
  )
}
