// Converted from test/suite/corpus/issue-1029-parameter-destructuring.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        data([1, 2, 3])
          .zip([1, 2, 3])
          .map(unsafeRaw.code<any>`((_, x)) => x`),
        [1, 2, 3],
      ),
    ),
  )
}
