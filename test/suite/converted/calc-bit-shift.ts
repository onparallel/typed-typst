// Converted from test/suite/corpus/calc-bit-shift.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`32.bit-lshift(2)`, 128),
      space,
      test(unsafeRaw.code<any>`694.bit-lshift(0)`, 694),
      space,
      test(unsafeRaw.code<any>`128.bit-rshift(2)`, 32),
      space,
      test(unsafeRaw.code<any>`128.bit-rshift(12345)`, 0),
      space,
      test(unsafeRaw.code<any>`(-7).bit-rshift(2)`, -2),
      space,
      test(unsafeRaw.code<any>`(-7).bit-rshift(12345)`, -1),
      space,
      test(unsafeRaw.code<any>`128.bit-rshift(2, logical: true)`, 32),
      space,
      test(unsafeRaw.code<any>`(-7).bit-rshift(61, logical: true)`, 7),
      space,
      test(unsafeRaw.code<any>`128.bit-rshift(12345, logical: true)`, 0),
      space,
      test(unsafeRaw.code<any>`(-7).bit-rshift(12345, logical: true)`, 0),
    ),
  )
}
