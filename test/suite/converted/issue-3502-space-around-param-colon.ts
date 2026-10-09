// Converted from test/suite/corpus/issue-3502-space-around-param-colon.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, v } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const f = define('f')
    .named('param', T.any, v)
    .returns(T.any)
    .body((p) => p['param'])
  return doc(m.lines(f.decl, inline(test(f({ param: 2 }), 2))))
}
