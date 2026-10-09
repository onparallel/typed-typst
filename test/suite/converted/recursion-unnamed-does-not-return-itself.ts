// Converted from test/suite/corpus/recursion-unnamed-does-not-return-itself.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, call, define, doc, inline, int, let_, m, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [fDecl, f] = let_('f', 10)
  const [fDecl_2, f_2] = let_('f', () => f)
  return doc(m.lines(fDecl, fDecl_2, inline(test(type(call(f_2)), int))))
}
