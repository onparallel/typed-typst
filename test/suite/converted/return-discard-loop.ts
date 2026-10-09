// Converted from test/suite/corpus/return-discard-loop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, space, state, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f1 = define('f1')
    .returns(T.any)
    .body((p) =>
      codeBlock([
        state('hello').update('world'),
        unsafeRaw.code<any>`for x in range(3) {
    return "nope1"
  }`,
      ]),
    )
  const f2 = define('f2')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  state("hello").update("world")
  let i = 0
  while i < 10 {
    return "nope2"
  }
}`,
    )
  return doc(f1.decl, f2.decl, inline(test(f1(), 'nope1'), space, test(f2(), 'nope2')))
}
