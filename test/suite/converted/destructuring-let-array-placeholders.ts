// Converted from test/suite/corpus/destructuring-let-array-placeholders.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [patternDecl, [a, , c]] = let_(['a', null, 'c', null], [1, 2, 3, 4])
  return doc(m.lines(patternDecl, inline(test(a, 1), space, test(c, 3))))
}
