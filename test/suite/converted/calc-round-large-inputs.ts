// Converted from test/suite/corpus/calc-round-large-inputs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, calc, decimal, define, doc, float, inline, neg, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(calc.round({ digits: 4000000000 }, 31114), 31114),
      space,
      test(calc.round({ digits: 12 }, unsafeRaw.code<any>`int.max`), unsafeRaw.code<any>`int.max`),
      space,
      test(calc.round({ digits: -20 }, unsafeRaw.code<any>`int.max`), 0),
      space,
      test(calc.round({ digits: 4000000000 }, 238959235.1295902), 238959235.1295902),
      space,
      test(calc.round({ digits: 12 }, float(1.7976931348623157e308)), float(1.7976931348623157e308)),
      space,
      test(calc.round({ digits: -308 }, float(1.7976931348623157e308)), float.inf),
      space,
      test(calc.round({ digits: -308 }, float(-1.7976931348623157e308)), neg(float.inf)),
      space,
      test(calc.round({ digits: -312 }, 12.34), float(0)),
      space,
      test(calc.round({ digits: 4000000000 }, decimal('238959235.129590203')), decimal('238959235.129590203')),
      space,
      test(
        calc.round({ digits: 12 }, decimal('79228162514264337593543950335')),
        decimal('79228162514264337593543950335'),
      ),
      space,
      test(calc.round({ digits: -50 }, decimal('79228162514264337593543950335')), decimal('0')),
      space,
      test(
        calc.round({ digits: -2 }, decimal('-79228162514264337593543950335')),
        decimal('-79228162514264337593543950300'),
      ),
    ),
  )
}
