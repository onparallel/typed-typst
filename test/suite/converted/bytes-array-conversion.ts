// Converted from test/suite/corpus/bytes-array-conversion.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, array, bytes, define, doc, inline } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(array(bytes('Hello')), [72, 101, 108, 108, 111])))
}
