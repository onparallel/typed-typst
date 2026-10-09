// Converted from test/suite/corpus/field-call-mut-eval-order-replace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dictDecl, dict_2] = let_('dict', { one: [] })
  return doc(
    inline(
      codeBlock([
        dictDecl,
        unsafeRaw.code<any>`dict.one.insert("two", dict.insert("one", (:)))`,
        test(unsafeRaw.code<any>`dict.one`, { two: null }),
      ]),
    ),
  )
}
