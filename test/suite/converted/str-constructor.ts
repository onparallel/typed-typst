// Converted from test/suite/corpus/str-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(str(123), '123'),
      space,
      test(str({ base: 3 }, 123), '11120'),
      space,
      test(str({ base: 16 }, -123), '−7b'),
      space,
      test(str({ base: 36 }, unsafeRaw.code<any>`int.max`), '1y2p0ij32e8e7'),
      space,
      test(str(50.14), '50.14'),
      space,
      test(unsafeRaw.code<any>`str(10 / 3).len() > 10`, true),
    ),
  )
}
