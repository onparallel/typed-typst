// Converted from test/suite/corpus/dict-remove-with-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { a: 1, b: 2 })
  const [dictDecl_2, dict_3] = let_('dict', { a: 1, b: 2 })
  return doc(
    inline(codeBlock([dictDecl, test(dict_2.remove({ default: 3 }, 'b'), 2)])),
    inline(codeBlock([dictDecl_2, test(dict_3.remove({ default: 3 }, 'c'), 3)])),
  )
}
