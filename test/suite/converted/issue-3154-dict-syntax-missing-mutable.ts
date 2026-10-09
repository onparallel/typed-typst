// Converted from test/suite/corpus/issue-3154-dict-syntax-missing-mutable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { a: 1 })
  return doc(inline(codeBlock([dictDecl, unsafeRaw.code<any>`dict.b = 9`, test(dict_2, { a: 1, b: 9 })])))
}
