// Converted from test/suite/corpus/int-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, decimal, define, div, doc, inline, int, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(int(false), 0),
      space,
      test(int(true), 1),
      space,
      test(int(10), 10),
      space,
      test(int('0'), 0),
      space,
      test(int('+150'), 150),
      space,
      test(int('-834'), -834),
      space,
      test(int({ base: 16 }, 'beef'), 48879),
      space,
      test(int({ base: 16 }, '-cAfFe'), -831486),
      space,
      test(int({ base: 2 }, '10'), 2),
      space,
      test(int({ base: 8 }, '644'), 420),
      space,
      test(int('−79'), -79),
      space,
      test(int('9223372036854775807'), unsafeRaw.code<any>`int.max`),
      space,
      test(int('-9223372036854775808'), unsafeRaw.code<any>`int.min`),
      space,
      test(int({ base: 16 }, '7FFFFFFFFFFFFFFF'), unsafeRaw.code<any>`int.max`),
      space,
      test(int({ base: 16 }, '-8000000000000000'), unsafeRaw.code<any>`int.min`),
      space,
      test(int(div(10, 3)), 3),
      space,
      test(int(-58.34), -58),
      space,
      test(int(decimal('92492.193848921')), 92492),
      space,
      test(int(decimal('-224.342211')), -224),
    ),
  )
}
