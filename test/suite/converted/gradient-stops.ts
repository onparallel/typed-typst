// Converted from test/suite/corpus/gradient-stops.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blue, define, doc, gradient, green, inline, pct, red, rgb } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(gradient.linear({ space: rgb }, red, green, blue).stops(), [
        [red, pct(0)],
        [green, pct(50)],
        [blue, pct(100)],
      ]),
    ),
  )
}
