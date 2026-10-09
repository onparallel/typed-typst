// Converted from test/suite/corpus/math-call-2d-spread-named.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, define, doc, inline, let_, m, range, space, spread, unsafeRaw } from '../../../src/index.ts'

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
  const [dictDecl, dict_2] = let_('dict', { one: 1, two: 2 })
  const [bothDecl, both] = let_('both', arguments_(spread(nums), spread(dict_2)))
  return doc(
    m.lines(
      args.decl,
      check.decl,
      numsDecl,
      dictDecl,
      bothDecl,
      inline(
        check(unsafeRaw.math`args(..nums;)`, 'arguments(((0, 1), (2, 3)))'),
        space,
        check(unsafeRaw.math`args(..dict;)`, 'arguments(one: 1, two: 2, ())'),
        space,
        check(unsafeRaw.math`args(1, ..dict;)`, 'arguments(one: 1, two: 2, ([1],))'),
        space,
        check(unsafeRaw.math`args(1, ..dict, 2;)`, 'arguments(one: 1, two: 2, ([1], [2]))'),
        space,
        check(unsafeRaw.math`args(1; ..dict, 2;)`, 'arguments(one: 1, two: 2, ([1],), ([2],))'),
        space,
        check(unsafeRaw.math`args(1; ..dict; 2;)`, 'arguments(one: 1, two: 2, ([1],), (), ([2],))'),
        space,
        check(unsafeRaw.math`args(..nums, ..dict;)`, 'arguments(one: 1, two: 2, ((0, 1), (2, 3)))'),
        space,
        check(unsafeRaw.math`args(..both;)`, 'arguments(one: 1, two: 2, ((0, 1), (2, 3)))'),
        space,
        check(unsafeRaw.math`args(..nums; ..dict)`, 'arguments(one: 1, two: 2, ((0, 1), (2, 3)))'),
        space,
        check(unsafeRaw.math`args(..dict; ..nums)`, 'arguments(one: 1, two: 2, (), ((0, 1), (2, 3)))'),
      ),
    ),
  )
}
