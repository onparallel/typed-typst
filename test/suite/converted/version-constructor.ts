// Converted from test/suite/corpus/version-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, array, define, doc, inline, unsafeRaw, version } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(test(array(version()), [])),
    inline(test(unsafeRaw.code<any>`version(1, 2).major`, 1)),
    inline(test(unsafeRaw.code<any>`version((1, 2)).minor`, 2)),
    inline(test(version(1, [2, 3], 4, [5, 6], 7).at(5), 6)),
  )
}
