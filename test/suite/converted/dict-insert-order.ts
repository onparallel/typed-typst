// Converted from test/suite/corpus/dict-insert-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { a: 1, b: 2 })
  const [rhsDecl, rhs] = let_('rhs', { c: 3, a: 4 })
  return doc(
    m.lines(dictDecl, rhsDecl),
    inline(test(unsafeRaw.code<any>`(dict + rhs).keys()`, ['a', 'b', 'c'])),
    inline(test(unsafeRaw.code<any>`{ dict; rhs }.keys()`, ['a', 'b', 'c'])),
    inline(test(unsafeRaw.code<any>`(:..dict, ..rhs).keys()`, ['a', 'b', 'c'])),
    inline(
      codeBlock([
        unsafeRaw.code<any>`for (k, v) in rhs {
    dict.insert(k, v)
  }`,
        test(unsafeRaw.code<any>`dict.keys()`, ['a', 'b', 'c']),
      ]),
    ),
    inline(
      codeBlock([
        unsafeRaw.code<any>`dict.a = 5`,
        unsafeRaw.code<any>`dict.d = 6`,
        test(unsafeRaw.code<any>`dict.keys()`, ['a', 'b', 'c', 'd']),
      ]),
    ),
  )
}
