// Converted from test/suite/corpus/code-block-nested-scopes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [aDecl, a] = let_('a', 'a1')
  const [aDecl_2, a_2] = let_('a', 'a2')
  const [aDecl_3, a_3] = let_('a', 'a3')
  return doc(
    inline(
      codeBlock([
        aDecl,
        codeBlock([aDecl_2, codeBlock([test(a_2, 'a2'), aDecl_3, test(a_3, 'a3')]), test(a_2, 'a2')]),
        test(a, 'a1'),
      ]),
    ),
  )
}
