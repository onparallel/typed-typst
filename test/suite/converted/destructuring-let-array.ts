// Converted from test/suite/corpus/destructuring-let-array.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [patternDecl, [a, b]] = let_(['a', 'b'], [1, 2])
  return doc(m.lines(patternDecl, inline(test(a, 1), space, test(b, 2))))
}
