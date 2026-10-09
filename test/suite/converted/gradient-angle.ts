// Converted from test/suite/corpus/gradient-angle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, btt, define, deg, doc, gradient, green, inline, ltr, red, rtl, space, ttb } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(gradient.linear(red, green).angle(), deg(0)),
      space,
      test(gradient.linear({ dir: ltr }, red, green).angle(), deg(0)),
      space,
      test(gradient.linear({ dir: rtl }, red, green).angle(), deg(180)),
      space,
      test(gradient.linear({ dir: ttb }, red, green).angle(), deg(90)),
      space,
      test(gradient.linear({ dir: btt }, red, green).angle(), deg(270)),
    ),
  )
}
