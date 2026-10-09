// Converted from test/suite/corpus/field-call-mut-eval-order-assign.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [whatDecl, what] = let_('what', data([]))
  return doc(
    inline(codeBlock([whatDecl, unsafeRaw.code<any>`what.insert("what", what = (:))`, test(what, { what: null })])),
  )
}
