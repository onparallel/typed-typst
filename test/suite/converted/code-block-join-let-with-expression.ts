// Converted from test/suite/corpus/code-block-join-let-with-expression.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, codeBlock, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 1)
  const [yDecl, y] = let_('y', 2)
  return doc(inline(test(codeBlock([xDecl, yDecl, add(x, y)]), 3)))
}
