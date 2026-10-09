// Converted from test/suite/corpus/bytes-addition.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, bytes, define, doc, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(add(bytes([1, 2]), bytes([])), bytes([1, 2])),
      space,
      test(add(bytes([1, 2]), bytes([3, 4])), bytes([1, 2, 3, 4])),
      space,
      test(add(bytes([]), bytes([3, 4])), bytes([3, 4])),
    ),
  )
}
