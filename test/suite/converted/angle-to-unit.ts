// Converted from test/suite/corpus/angle-to-unit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, deg, doc, float, inline, rad, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(rad(1).rad(), float(1)),
      space,
      test(rad(1.23).rad(), 1.23),
      space,
      test(deg(0).rad(), float(0)),
      space,
      test(deg(2).deg(), float(2)),
      space,
      test(deg(2.94).deg(), 2.94),
      space,
      test(rad(0).deg(), float(0)),
    ),
  )
}
