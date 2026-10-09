// Converted from test/suite/corpus/issue-3144-unexpected-arrow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, call, define, doc, inline, m } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .named('a', T.any, 10)
    .returns(T.any)
    .body((p) => add(call(p['a'], 1), 1))
  return doc(m.lines(f.decl, inline(test(f({ a: (unused) => 5 }), 6))))
}
