// Converted from test/suite/corpus/version-equality.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, version } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(version(), version(0)),
      space,
      test(version(0), version(0, 0)),
      space,
      test(version(1, 2), version(1, 2, 0, 0, 0, 0)),
    ),
  )
}
