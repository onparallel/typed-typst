// Converted from test/suite/corpus/dict-insert.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { a: 1, b: 2 })
  return doc(
    inline(
      codeBlock([
        dictDecl,
        dict_2.insert('b', 3),
        test(dict_2, { a: 1, b: 3 }),
        dict_2.insert('c', 5),
        test(dict_2, { a: 1, b: 3, c: 5 }),
      ]),
    ),
  )
}
