// Converted from test/suite/corpus/return-join.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        'a',
        unsafeRaw.code<any>`if x == 0 {
    return "b"
  } else if x == 1 {
    "c"
  } else {
    "d"
    return
    "e"
  }`,
      ]),
    )
  return doc(f.decl, inline(test(f(0), 'b'), space, test(f(1), 'ac'), space, test(f(2), 'ad')))
}
