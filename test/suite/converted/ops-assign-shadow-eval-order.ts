// Converted from test/suite/corpus/ops-assign-shadow-eval-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [varDecl, var_2] = let_('var', 'a')
  return doc(
    inline(codeBlock([varDecl, unsafeRaw.code<any>`var += var.at(0, default: let var = "b")`, test(var_2, 'ba')])),
  )
}
