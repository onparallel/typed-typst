// Converted from test/suite/corpus/calc-bit-logical.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`64.bit-not()`, -65),
      space,
      test(unsafeRaw.code<any>`0.bit-not()`, -1),
      space,
      test(unsafeRaw.code<any>`(-56).bit-not()`, 55),
      space,
      test(unsafeRaw.code<any>`128.bit-and(192)`, 128),
      space,
      test(unsafeRaw.code<any>`192.bit-and(224)`, 192),
      space,
      test(unsafeRaw.code<any>`(-1).bit-and(325532)`, 325532),
      space,
      test(unsafeRaw.code<any>`0.bit-and(-53)`, 0),
      space,
      test(unsafeRaw.code<any>`0.bit-or(-1)`, -1),
      space,
      test(unsafeRaw.code<any>`5.bit-or(3)`, 7),
      space,
      test(unsafeRaw.code<any>`(-50).bit-or(3)`, -49),
      space,
      test(unsafeRaw.code<any>`64.bit-or(32)`, 96),
      space,
      test(unsafeRaw.code<any>`(-1).bit-xor(1)`, -2),
      space,
      test(unsafeRaw.code<any>`64.bit-xor(96)`, 32),
      space,
      test(unsafeRaw.code<any>`(-1).bit-xor(-7)`, 6),
      space,
      test(unsafeRaw.code<any>`0.bit-xor(492)`, 492),
    ),
  )
}
