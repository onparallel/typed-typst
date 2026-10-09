// Converted from test/suite/corpus/dir-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bottom, btt, define, doc, inline, left, ltr, right, rtl, space, top, ttb } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(ltr.end(), right),
      space,
      test(rtl.end(), left),
      space,
      test(ttb.end(), bottom),
      space,
      test(btt.end(), top),
    ),
  )
}
