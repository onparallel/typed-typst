// Converted from test/suite/corpus/code-block-multiple-expressions-single-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, codeBlock, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 'm')
  return doc(inline(test(codeBlock([xDecl, add(x, 'y')]), 'my')))
}
