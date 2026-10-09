// Converted from test/suite/corpus/ops-associativity-right.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 1)
  const [yDecl, y] = let_('y', 2)
  return doc(inline(codeBlock([xDecl, yDecl, unsafeRaw.code<any>`x = y = "ok"`, test(x, null), test(y, 'ok')])))
}
