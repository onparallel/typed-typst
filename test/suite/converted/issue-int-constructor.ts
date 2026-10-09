// Converted from test/suite/corpus/issue-int-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, int, let_, m, space, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 9223372036854775800n)
  return doc(m.lines(xDecl, inline(test(type(x), int), space, test(int(x), x))))
}
