// Converted from test/suite/corpus/math-call-spread-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, range, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const testRepr = define('test-repr').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const args = define('args')
    .rest('body', T.any)
    .returns(T.any)
    .body((p) => p['body'])
  const check = define('check')
    .pos('it', T.any)
    .pos('r', T.any)
    .returns(T.any)
    .body((p) => testRepr(unsafeRaw.code<any>`it.body.text`, p['r']))
  const [numsDecl, nums] = let_('nums', range(0, 4).chunks(2))
  return doc(
    m.lines(
      args.decl,
      check.decl,
      inline(
        check(unsafeRaw.math`args(..#range(0, 4).chunks(2))`, 'arguments((0, 1), (2, 3))'),
        space,
        check(unsafeRaw.math`#args(range(1, 5).chunks(2))`, 'arguments(((1, 2), (3, 4)))'),
        space,
        check(unsafeRaw.math`#args(..range(1, 5).chunks(2))`, 'arguments((1, 2), (3, 4))'),
        space,
        check(unsafeRaw.math`args(#(..range(2, 6).chunks(2)))`, 'arguments(((2, 3), (4, 5)))'),
        space,
        numsDecl,
        space,
        check(unsafeRaw.math`args(..nums)`, 'arguments((0, 1), (2, 3))'),
        space,
        check(unsafeRaw.math`args(..nums, ..nums)`, 'arguments((0, 1), (2, 3), (0, 1), (2, 3))'),
        space,
        check(unsafeRaw.math`args(..nums, 4, 5)`, 'arguments((0, 1), (2, 3), [4], [5])'),
        space,
        check(unsafeRaw.math`args(..nums, ..#range(4, 6))`, 'arguments((0, 1), (2, 3), 4, 5)'),
        space,
        check(unsafeRaw.math`args(..nums, #range(4, 6))`, 'arguments((0, 1), (2, 3), (4, 5))'),
      ),
    ),
  )
}
