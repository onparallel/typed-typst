// Converted from test/suite/corpus/closure-as-arg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, call, codeBlock, define, doc, inline, let_, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [chainDecl, chain] = let_('chain', (f, g) => (x) => call(f, call(g, x)))
  const [fDecl, f_2] = let_('f', (x_2) => add(x_2, 1))
  const [gDecl, g_2] = let_('g', (x_3) => times(2, x_3))
  const [hDecl, h_2] = let_('h', call(chain, f_2, g_2))
  return doc(inline(codeBlock([chainDecl, fDecl, gDecl, hDecl, test(call(h_2, 2), 5)])))
}
