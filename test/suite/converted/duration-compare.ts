// Converted from test/suite/corpus/duration-compare.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`duration(minutes: 20) > duration(minutes: 10)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 20) >= duration(minutes: 10)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 10) < duration(minutes: 20)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 10) <= duration(minutes: 20)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 10) == duration(minutes: 10)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 10) != duration(minutes: 20)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 10) <= duration(minutes: 10)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 10) >= duration(minutes: 10)`, true),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 20) < duration(minutes: 10)`, false),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 20) <= duration(minutes: 10)`, false),
      space,
      test(unsafeRaw.code<any>`duration(minutes: 20) == duration(minutes: 10)`, false),
    ),
  )
}
