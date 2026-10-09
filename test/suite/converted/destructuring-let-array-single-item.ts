// Converted from test/suite/corpus/destructuring-let-array-single-item.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [patternDecl, [a]] = let_(['a'], [1])
  return doc(m.lines(patternDecl, inline(test(a, 1))))
}
