// Converted from test/suite/corpus/str-from-and-to-unicode.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(str.fromUnicode(97), 'a'), space, test(str.toUnicode('a'), 97)))
}
