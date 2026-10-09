// Converted from test/suite/corpus/dir-sign.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, btt, define, doc, inline, ltr, rtl, space, ttb } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(test(ltr.sign(), 1), space, test(rtl.sign(), -1), space, test(ttb.sign(), 1), space, test(btt.sign(), -1)),
  )
}
