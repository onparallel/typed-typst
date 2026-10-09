// Converted from test/suite/corpus/ops-unary-bool.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(test(unsafeRaw.code<any>`not true`, false), space, test(unsafeRaw.code<any>`not false`, true)),
    inline(
      test(unsafeRaw.code<any>`false and false`, false),
      space,
      test(unsafeRaw.code<any>`false and true`, false),
      space,
      test(unsafeRaw.code<any>`true and false`, false),
      space,
      test(unsafeRaw.code<any>`true and true`, true),
    ),
    inline(
      test(unsafeRaw.code<any>`false or false`, false),
      space,
      test(unsafeRaw.code<any>`false or true`, true),
      space,
      test(unsafeRaw.code<any>`true or false`, true),
      space,
      test(unsafeRaw.code<any>`true or true`, true),
    ),
    inline(
      test(unsafeRaw.code<any>`false and dont-care`, false),
      space,
      test(unsafeRaw.code<any>`true or dont-care`, true),
    ),
  )
}
