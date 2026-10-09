// Converted from test/suite/corpus/import-from-type-scope-item-renamed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#import array: pop as renamed-pop`,
      inline(test(unsafeRaw.code<any>`renamed-pop((1, 2))`, 2)),
    ),
  )
}
