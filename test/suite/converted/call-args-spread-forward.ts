// Converted from test/suite/corpus/call-args-spread-forward.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, codeBlock, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .pos('b', T.any)
    .named('c', T.any, '!')
    .returns(T.any)
    .body((p) => add(p['b'], p['c']))
  const g = define('g')
    .pos('a', T.any)
    .rest('sink', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`a + f(..sink)`)
  return doc(inline(codeBlock([f.decl, g.decl, test(g({ c: 'c' }, 'a', 'b'), 'abc')])))
}
