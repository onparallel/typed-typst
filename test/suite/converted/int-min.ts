// Converted from test/suite/corpus/int-min.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, int, minus, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`int.min`, unsafeRaw.code<any>`-1 - int.max`),
      space,
      test(unsafeRaw.code<any>`int.min`, int('-9223372036854775808')),
    ),
  )
}
