// Converted from test/suite/corpus/float-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, decimal, define, doc, float, inline, pct, space, times, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(float(10), float(10)),
      space,
      test(float(times(pct(50), pct(30))), 0.15),
      space,
      test(float('31.4e-1'), 3.14),
      space,
      test(float('31.4e−1'), 3.14),
      space,
      test(float('3.1415'), 3.1415),
      space,
      test(float('-7654.321'), -7654.321),
      space,
      test(float('−7654.321'), -7654.321),
      space,
      test(float(decimal('4.89')), 4.89),
      space,
      test(float(decimal('3.1234567891234567891234567891')), 3.123456789123457),
      space,
      test(float(decimal('79228162514264337593543950335')), float(7.922816251426434e28)),
      space,
      test(float(decimal('-79228162514264337593543950335')), float(-7.922816251426434e28)),
      space,
      test(type(float(10)), float),
    ),
  )
}
