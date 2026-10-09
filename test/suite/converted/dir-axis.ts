// Converted from test/suite/corpus/dir-axis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, btt, define, doc, inline, ltr, rtl, space, ttb } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(ltr.axis(), 'horizontal'),
      space,
      test(rtl.axis(), 'horizontal'),
      space,
      test(ttb.axis(), 'vertical'),
      space,
      test(btt.axis(), 'vertical'),
    ),
  )
}
