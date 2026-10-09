// Converted from test/suite/corpus/string-contains.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, regex, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(data('abc').contains('b'), true),
      space,
      test(unsafeRaw.code<any>`"b" in "abc"`, true),
      space,
      test(data('1234f').contains(regex('\\d')), true),
      space,
      test(unsafeRaw.code<any>`regex("\\\\d") in "1234f"`, true),
      space,
      test(data('abc').contains('d'), false),
      space,
      test(unsafeRaw.code<any>`"1234g" in "1234f"`, false),
      space,
      test(data('abc').contains(regex('^[abc]$')), false),
      space,
      test(data('abc').contains(regex('^[abc]+$')), true),
    ),
  )
}
