// Converted from test/suite/corpus/math-call-named-basic.typ by scripts/convert-suite.ts — do not edit.
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
        check(unsafeRaw.math`args(_a: a)`, 'arguments(_a: [a])'),
        space,
        check(unsafeRaw.math`args(_a-b: a)`, 'arguments(_a-b: [a])'),
        space,
        check(unsafeRaw.math`args(a-b: a)`, 'arguments(a-b: [a])'),
        space,
        check(unsafeRaw.math`args(a-b-c: a)`, 'arguments(a-b-c: [a])'),
        space,
        check(unsafeRaw.math`args(a--c: a)`, 'arguments(a--c: [a])'),
        space,
        check(unsafeRaw.math`args(a: a-b)`, 'arguments(a: sequence([a], [−], [b]))'),
        space,
        check(unsafeRaw.math`args(a: a:b)`, 'arguments(a: sequence([a], [:], [b]))'),
        space,
        check(unsafeRaw.math`args(a: a : b)`, 'arguments(a: sequence([a], [ ], [:], [ ], [b]))'),
        space,
        check(unsafeRaw.math`args(a-b: a-b)`, 'arguments(a-b: sequence([a], [−], [b]))'),
        space,
        check(unsafeRaw.math`args(a-b)`, 'arguments(sequence([a], [−], [b]))'),
      ),
    ),
  )
}
