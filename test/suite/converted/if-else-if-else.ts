// Converted from test/suite/corpus/if-else-if-else.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, space, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const nth = define('nth')
    .pos('n', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        str(p['n']),
        unsafeRaw.code<any>`if n == 1 { "st" }
  else if n == 2 { "nd" }
  else if n == 3 { "rd" }
  else { "th" }`,
      ]),
    )
  return doc(
    nth.decl,
    inline(
      test(nth(1), '1st'),
      space,
      test(nth(2), '2nd'),
      space,
      test(nth(3), '3rd'),
      space,
      test(nth(4), '4th'),
      space,
      test(nth(5), '5th'),
    ),
  )
}
