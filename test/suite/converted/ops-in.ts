// Converted from test/suite/corpus/ops-in.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`"hi" in "worship"`, true),
      space,
      test(unsafeRaw.code<any>`"hi" in ("we", "hi", "bye")`, true),
      space,
      test(unsafeRaw.code<any>`"Hey" in "abHeyCd"`, true),
      space,
      test(unsafeRaw.code<any>`"Hey" in "abheyCd"`, false),
      space,
      test(unsafeRaw.code<any>`5 in range(10)`, true),
      space,
      test(unsafeRaw.code<any>`12 in range(10)`, false),
      space,
      test(unsafeRaw.code<any>`"" in ()`, false),
      space,
      test(unsafeRaw.code<any>`"key" in (key: "value")`, true),
      space,
      test(unsafeRaw.code<any>`"value" in (key: "value")`, false),
      space,
      test(unsafeRaw.code<any>`"Hey" not in "abheyCd"`, true),
      space,
      test(
        unsafeRaw.code<any>`"a" not
/* fun comment? */ in "abc"`,
        false,
      ),
      space,
      test(unsafeRaw.code<any>`"sys" in std`, true),
      space,
      test(unsafeRaw.code<any>`"system" in std`, false),
    ),
  )
}
