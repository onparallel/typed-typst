// Converted from test/suite/corpus/recursion-shadowing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => 'hello')
  const f_2 = define('f')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`if x != none { f(none) } else { "world" }`)
  return doc(m.lines(f.decl, f_2.decl, inline(test(f_2(1), 'world'))))
}
