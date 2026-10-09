// Converted from test/suite/corpus/bytes-joining.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, codeBlock, define, doc, inline, str } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(inline(test(str(codeBlock([bytes('Hello'), bytes([32]), bytes('World')])), 'Hello World')))
}
