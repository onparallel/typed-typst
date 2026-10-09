// Converted from test/suite/corpus/calc-round.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, int, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.round({ digits: 2 }, calc.e), 2.72),
      space,
      test(calc.round({ digits: 2 }, calc.pi), 3.14),
      space,
      test(type(calc.round({ digits: 2 }, 3.1415)), float),
      space,
      test(type(calc.round({ digits: 2 }, 5)), int),
      space,
      test(type(calc.round({ digits: 2 }, decimal('3.1415'))), decimal),
      space,
      test(type(calc.round({ digits: -2 }, 314.15)), float),
      space,
      test(type(calc.round({ digits: -2 }, 523)), int),
      space,
      test(type(calc.round({ digits: -2 }, decimal('314.15'))), decimal),
    ),
  )
}
