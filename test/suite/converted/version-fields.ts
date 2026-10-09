// Converted from test/suite/corpus/version-fields.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`version(1, 2, 3).major`, 1),
      space,
      test(unsafeRaw.code<any>`version(1, 2, 3).minor`, 2),
      space,
      test(unsafeRaw.code<any>`version(1, 2, 3).patch`, 3),
    ),
  )
}
