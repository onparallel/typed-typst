// Converted from test/suite/corpus/recursion-named-returns-itself.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, function_, inline, let_, m, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [fDecl, f] = let_('f', 10)
  const f_2 = define('f')
    .returns(T.any)
    .body((p) => f)
  return doc(m.lines(fDecl, f_2.decl, inline(test(type(f_2()), function_))))
}
