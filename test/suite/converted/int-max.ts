// Converted from test/suite/corpus/int-max.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`int.max`, 9223372036854775807n),
      space,
      test(unsafeRaw.code<any>`int.max`, 9223372036854775807n),
    ),
  )
}
