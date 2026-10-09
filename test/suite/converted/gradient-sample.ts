// Converted from test/suite/corpus/gradient-sample.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blue, define, doc, gradient, green, inline, pct, red, rgb, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(gradient.linear({ space: rgb }, red, green, blue).sample(pct(0)), red),
      space,
      test(gradient.linear({ space: rgb }, red, green, blue).sample(pct(25)), rgb('#97873b')),
      space,
      test(gradient.linear({ space: rgb }, red, green, blue).sample(pct(50)), green),
      space,
      test(gradient.linear({ space: rgb }, red, green, blue).sample(pct(75)), rgb('#17a08c')),
      space,
      test(gradient.linear({ space: rgb }, red, green, blue).sample(pct(100)), blue),
    ),
  )
}
