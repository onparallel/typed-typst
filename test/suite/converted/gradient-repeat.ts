// Converted from test/suite/corpus/gradient-repeat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blue, define, doc, gradient, green, inline, pct, red, rgb, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(gradient.linear({ space: rgb }, red, green, blue).repeat(2).stops(), [
        [red, pct(0)],
        [green, pct(25)],
        [blue, pct(50)],
        [red, pct(50)],
        [green, pct(75)],
        [blue, pct(100)],
      ]),
      space,
      test(gradient.linear({ space: rgb }, red, green, blue).repeat({ mirror: true }, 2).stops(), [
        [red, pct(0)],
        [green, pct(25)],
        [blue, pct(50)],
        [green, pct(75)],
        [red, pct(100)],
      ]),
    ),
  )
}
