// Converted from test/suite/corpus/eval.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`eval("1 + 2")`, 3),
      space,
      test(unsafeRaw.code<any>`eval("1 + x", scope: (x: 3))`, 4),
      space,
      test(unsafeRaw.code<any>`eval("let x = x + 1; x + 1", scope: (x: 1))`, 3),
    ),
  )
}
