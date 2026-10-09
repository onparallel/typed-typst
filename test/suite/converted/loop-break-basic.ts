// Converted from test/suite/corpus/loop-break-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [varDecl, var_2] = let_('var', 0)
  const [errorDecl, error] = let_('error', false)
  return doc(
    m.lines(varDecl, errorDecl),
    inline(unsafeRaw.code<any>`for i in range(10) {
  var += i
  if i > 5 {
    break
    error = true
  }
}`),
    inline(test(var_2, 21), space, test(error, false)),
  )
}
