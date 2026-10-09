// Converted from test/suite/corpus/let-termination.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [v1Decl, v1] = let_('v1', 1)
  const [v2Decl, v2] = let_('v2', 2)
  const [v3Decl, v3] = let_('v3', 3)
  return doc(
    m.lines(v1Decl, 'One'),
    inline`${v2Decl} Two`,
    m.lines(v3Decl, 'Three'),
    inline(test(v1, 1), space, test(v2, 2), space, test(v3, 3)),
  )
}
