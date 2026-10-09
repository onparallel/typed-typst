// Converted from test/suite/corpus/duration-negate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, duration, inline, neg } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(neg(duration({ hours: 2 })), duration({ hours: -2 }))))
}
