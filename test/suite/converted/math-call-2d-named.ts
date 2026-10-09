// Converted from test/suite/corpus/math-call-2d-named.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const testRepr = define('test-repr').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const args = define('args')
    .rest('body', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`(body.pos(), body.named())`)
  const check = define('check')
    .pos('it', T.any)
    .pos('r', T.any)
    .returns(T.any)
    .body((p) => testRepr(unsafeRaw.code<any>`it.body.text`, p['r']))
  return doc(
    m.lines(
      args.decl,
      check.decl,
      inline(
        check(unsafeRaw.math`args(a: b)`, '((), (a: [b]))'),
        space,
        check(unsafeRaw.math`args(a: b,)`, '((), (a: [b]))'),
        space,
        check(unsafeRaw.math`args(a: b;)`, '(((),), (a: [b]))'),
        space,
        check(unsafeRaw.math`args(1, 2; 3, 4)`, '((([1], [2]), ([3], [4])), (:))'),
      ),
    ),
    inline(
      check(unsafeRaw.math`args(a: b, 1, 2; 3, 4)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(1, a: b, 2; 3, 4)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(1, 2, a: b; 3, 4)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(1, 2; a: b, 3, 4)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(1, 2; 3, a: b, 4)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(1, 2; 3, 4, a: b)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(1, 2; 3, 4; a: b)`, '((([1], [2]), ([3], [4])), (a: [b]))'),
    ),
    inline(
      check(unsafeRaw.math`args(a: b, 1, 2, 3, c: d)`, '(([1], [2], [3]), (a: [b], c: [d]))'),
      space,
      check(unsafeRaw.math`args(1, 2, 3; a: b)`, '((([1], [2], [3]),), (a: [b]))'),
      space,
      check(unsafeRaw.math`args(a-b: a,, e:f;; d)`, '((([],), ([],), ([d],)), (a-b: [a], e: [f]))'),
      space,
      check(unsafeRaw.math`args(a: b, ..#range(0, 4))`, '((0, 1, 2, 3), (a: [b]))'),
    ),
  )
}
