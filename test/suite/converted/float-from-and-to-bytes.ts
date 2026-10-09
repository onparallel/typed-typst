// Converted from test/suite/corpus/float-from-and-to-bytes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, define, doc, float, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(float.fromBytes(bytes([0, 0, 0, 0, 0, 0, 240, 63])), float(1)),
      space,
      test(float.fromBytes({ endian: 'big' }, bytes([63, 240, 0, 0, 0, 0, 0, 0])), float(1)),
      space,
      test(unsafeRaw.code<any>`1.0.to-bytes()`, bytes([0, 0, 0, 0, 0, 0, 240, 63])),
      space,
      test(unsafeRaw.code<any>`1.0.to-bytes(endian: "big")`, bytes([63, 240, 0, 0, 0, 0, 0, 0])),
    ),
    inline(
      test(float.fromBytes(bytes([0, 0, 32, 64])), 2.5),
      space,
      test(float.fromBytes({ endian: 'big' }, bytes([64, 32, 0, 0])), 2.5),
      space,
      test(unsafeRaw.code<any>`2.5.to-bytes(size: 4)`, bytes([0, 0, 32, 64])),
      space,
      test(unsafeRaw.code<any>`2.5.to-bytes(size: 4, endian: "big")`, bytes([64, 32, 0, 0])),
    ),
  )
}
