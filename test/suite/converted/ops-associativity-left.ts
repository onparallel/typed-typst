// Converted from test/suite/corpus/ops-associativity-left.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, div, doc, inline, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`10 / 2 / 2 == (10 / 2) / 2`, true),
      space,
      test(unsafeRaw.code<any>`10 / 2 / 2 == 10 / (2 / 2)`, false),
      space,
      test(times(div(1, 2), 3), 1.5),
    ),
  )
}
