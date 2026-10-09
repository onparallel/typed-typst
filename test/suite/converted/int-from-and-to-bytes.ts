// Converted from test/suite/corpus/int-from-and-to-bytes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, define, doc, inline, int, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(int.fromBytes(bytes([])), 0),
      space,
      test(int.fromBytes({ endian: 'little', signed: true }, bytes([1, 0, 0, 0, 0, 0, 0, 0])), 1),
      space,
      test(int.fromBytes({ endian: 'big', signed: true }, bytes([1, 0, 0, 0, 0, 0, 0, 0])), 72057594037927936n),
      space,
      test(int.fromBytes({ endian: 'little', signed: false }, bytes([1, 0, 0, 0, 0, 0, 0, 0])), 1),
      space,
      test(int.fromBytes({ endian: 'big', signed: true }, bytes([255])), -1),
      space,
      test(int.fromBytes({ endian: 'big', signed: false }, bytes([255])), 255),
      space,
      test(
        int.fromBytes({ endian: 'big', signed: true }, unsafeRaw.code<any>`(-1000).to-bytes(endian: "big", size: 5)`),
        -1000,
      ),
      space,
      test(
        int.fromBytes(
          { endian: 'little', signed: true },
          unsafeRaw.code<any>`(-1000).to-bytes(endian: "little", size: 5)`,
        ),
        -1000,
      ),
      space,
      test(
        int.fromBytes({ endian: 'big', signed: true }, unsafeRaw.code<any>`1000.to-bytes(endian: "big", size: 5)`),
        1000,
      ),
      space,
      test(
        int.fromBytes(
          { endian: 'little', signed: true },
          unsafeRaw.code<any>`1000.to-bytes(endian: "little", size: 5)`,
        ),
        1000,
      ),
      space,
      test(
        int.fromBytes(
          { endian: 'little', signed: false },
          unsafeRaw.code<any>`1000.to-bytes(endian: "little", size: 5)`,
        ),
        1000,
      ),
    ),
  )
}
