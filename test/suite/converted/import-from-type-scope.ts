// Converted from test/suite/corpus/import-from-type-scope.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#import array: zip`,
      inline(
        test(unsafeRaw.code<any>`zip((1, 2), (3, 4))`, [
          [1, 3],
          [2, 4],
        ]),
      ),
    ),
  )
}
