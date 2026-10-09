// Converted from test/suite/corpus/bytes-string-conversion.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, define, doc, inline, range, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(str(bytes(range(65, 80))), 'ABCDEFGHIJKLMNO')))
}
