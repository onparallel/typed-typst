// Converted from test/suite/corpus/dict-at-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { func: (x) => add(x, 1) })
  return doc(m.lines(dictDecl, inline(test(unsafeRaw.code<any>`dict.at("func")(0)`, 1))))
}
