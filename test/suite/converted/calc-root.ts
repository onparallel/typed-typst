// Converted from test/suite/corpus/calc-root.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, define, doc, float, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.root(float(12), 1), float(12)),
      space,
      test(calc.root(float(9), 2), float(3)),
      space,
      test(calc.root(float(27), 3), float(3)),
      space,
      test(calc.root(float(-27), 3), float(-3)),
      space,
      test(calc.root(float(100), -2), 0.1),
    ),
  )
}
