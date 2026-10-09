// Converted from test/suite/corpus/math-call-escape.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

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
  return doc(
    m.lines(
      args.decl,
      check.decl,
      inline(
        check(unsafeRaw.math`args(a\\;b)`, 'arguments(sequence([a], [;], [b]))'),
        space,
        check(unsafeRaw.math`args(a\\,b;c)`, 'arguments((sequence([a], [,], [b]),), ([c],))'),
        space,
        check(unsafeRaw.math`args(b\\;c\\,d;e)`, 'arguments((sequence([b], [;], [c], [,], [d]),), ([e],))'),
        space,
        check(unsafeRaw.math`args(a\\: b)`, 'arguments(sequence([a], [:], [ ], [b]))'),
        space,
        check(unsafeRaw.math`args(a : b)`, 'arguments(sequence([a], [ ], [:], [ ], [b]))'),
        space,
        check(unsafeRaw.math`args(\\..a)`, 'arguments(sequence([.], [.], [a]))'),
        space,
        check(unsafeRaw.math`args(.. a)`, 'arguments(sequence([.], [.], [ ], [a]))'),
        space,
        check(unsafeRaw.math`args(a..b)`, 'arguments(sequence([a], [.], [.], [b]))'),
      ),
    ),
  )
}
