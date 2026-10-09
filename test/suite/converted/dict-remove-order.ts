// Converted from test/suite/corpus/dict-remove-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { a: 1, b: 2, c: 3, d: 4 })
  return doc(m.lines(dictDecl, inline(test(dict_2.remove('b'), 2), space, test(dict_2.keys(), ['a', 'c', 'd']))))
}
