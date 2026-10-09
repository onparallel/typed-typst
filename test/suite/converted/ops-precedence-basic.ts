// Converted from test/suite/corpus/ops-precedence-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, space, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(test(add(1, times(2, -3)), -5)),
    inline(test(unsafeRaw.code<any>`3 == 5 - 2`, true)),
    inline(
      test(unsafeRaw.code<any>`"a" == "a" and 2 < 3`, true),
      space,
      test(unsafeRaw.code<any>`not "b" == "b"`, false),
    ),
  )
}
