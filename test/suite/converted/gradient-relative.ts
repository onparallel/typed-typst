// Converted from test/suite/corpus/gradient-relative.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, gradient, green, inline, red, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(gradient.linear({ relative: 'self' }, red, green).relative(), 'self'),
      space,
      test(gradient.linear({ relative: 'parent' }, red, green).relative(), 'parent'),
      space,
      test(gradient.linear(red, green).relative(), auto),
    ),
  )
}
