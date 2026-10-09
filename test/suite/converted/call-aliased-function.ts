// Converted from test/suite/corpus/call-aliased-function.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, call, define, doc, inline, let_, m, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [aliasDecl, alias] = let_('alias', type)
  return doc(m.lines(aliasDecl, inline(test(call(alias, alias), type))))
}
