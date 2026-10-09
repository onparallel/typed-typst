// Converted from test/suite/corpus/arguments-plus-sum-join.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, arguments_, codeBlock, data, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [lhsDecl, lhs] = let_('lhs', arguments_({ key: 'value' }, 0, '1', 3))
  const [rhsDecl, rhs] = let_('rhs', arguments_({ otherKey: 4, key: 'other value' }, 3))
  const [resultDecl, result] = let_('result', arguments_({ otherKey: 4, key: 'other value' }, 0, '1', 3, 3))
  return doc(
    m.lines(
      lhsDecl,
      rhsDecl,
      resultDecl,
      inline(
        test(add(lhs, rhs), result),
        space,
        test(codeBlock([lhs, rhs]), result),
        space,
        test(data([lhs, rhs]).sum(), result),
        space,
        test(data([lhs, rhs]).join(), result),
      ),
    ),
  )
}
