// Converted from test/suite/corpus/return-with-value.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .pos('x', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  return x + 1
}`,
    )
  return doc(f.decl, inline(test(f(1), 2)))
}
