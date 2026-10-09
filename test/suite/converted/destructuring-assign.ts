// Converted from test/suite/corpus/destructuring-assign.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [aDecl, a] = let_('a', null)
  const [bDecl, b] = let_('b', null)
  const [cDecl, c] = let_('c', null)
  const [aDecl_2, a_2] = let_('a', data([1, 2]))
  const [aDecl_3, a_3] = let_('a', data([1, 2]))
  const [aDecl_4, a_4] = let_('a', data([1, 2]))
  return doc(
    m.lines(aDecl, bDecl, cDecl, inline(unsafeRaw.code<any>`((a,) = (1,))`, space, test(a, 1))),
    inline(unsafeRaw.code<any>`((_, a, b, _) = (1, 2, 3, 4))`, space, test(a, 2), space, test(b, 3)),
    inline(
      unsafeRaw.code<any>`((a, b, ..c) = (1, 2, 3, 4, 5, 6))`,
      space,
      test(a, 1),
      space,
      test(b, 2),
      space,
      test(c, [3, 4, 5, 6]),
    ),
    inline(
      unsafeRaw.code<any>`((a: a, b, x: c) = (a: 1, b: 2, x: 3))`,
      space,
      test(a, 1),
      space,
      test(b, 2),
      space,
      test(c, 3),
    ),
    m.lines(
      aDecl_2,
      inline(unsafeRaw.code<any>`((a: a.at(0), b) = (a: 3, b: 4))`, space, test(a_2, [3, 2]), space, test(b, 4)),
    ),
    m.lines(aDecl_3, inline(unsafeRaw.code<any>`((a.at(0), b) = (3, 4))`, space, test(a_3, [3, 2]), space, test(b, 4))),
    inline(unsafeRaw.code<any>`((a, ..b) = (1, 2, 3, 4))`, space, test(a_3, 1), space, test(b, [2, 3, 4])),
    m.lines(
      aDecl_4,
      inline(unsafeRaw.code<any>`((b, ..a.at(0)) = (1, 2, 3, 4))`, space, test(a_4, [[2, 3, 4], 2]), space, test(b, 1)),
    ),
  )
}
