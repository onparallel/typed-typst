// Converted from test/suite/corpus/closure-without-captures.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, call, codeBlock, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [adderDecl, adder] = let_('adder', (x, y) => add(x, y))
  return doc(inline(codeBlock([adderDecl, test(call(adder, 2, 3), 5)])))
}
