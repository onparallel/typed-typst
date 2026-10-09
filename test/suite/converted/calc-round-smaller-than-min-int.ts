// Converted from test/suite/corpus/calc-round-smaller-than-min-int.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.round(decimal('-9223372036854775809.5')), decimal('-9223372036854775810')),
      space,
      test(calc.round(float(-9223372036854776000)), float(-9223372036854776000)),
    ),
  )
}
