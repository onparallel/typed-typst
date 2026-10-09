// Converted from test/suite/corpus/math-call-2d-basic.typ by scripts/convert-suite.ts — do not edit.
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
        check(unsafeRaw.math`args(a;b)`, 'arguments(([a],), ([b],))'),
        space,
        check(unsafeRaw.math`args(a,b;c)`, 'arguments(([a], [b]), ([c],))'),
        space,
        check(unsafeRaw.math`args(a,b;c,d;e,f)`, 'arguments(([a], [b]), ([c], [d]), ([e], [f]))'),
        space,
        check(unsafeRaw.math`args( a; b; )`, 'arguments(([a],), ([b],))'),
        space,
        check(unsafeRaw.math`args(a;  ; c)`, 'arguments(([a],), ([],), ([c],))'),
        space,
        check(unsafeRaw.math`args(a b,/**/; b)`, 'arguments((sequence([a], [ ], [b]), []), ([b],))'),
        space,
        check(unsafeRaw.math`args(a/**/b, ; b)`, 'arguments((sequence([a], [b]), []), ([b],))'),
        space,
        check(unsafeRaw.math`args( ;/**/a/**/b/**/; )`, 'arguments(([],), (sequence([a], [b]),))'),
        space,
        check(unsafeRaw.math`args( ; , ; )`, 'arguments(([],), ([], []))'),
        space,
        check(
          unsafeRaw.math`args(/**/; // funky whitespace/trivia
    ,   /**/  ;/**/)`,
          'arguments(([],), ([], []))',
        ),
      ),
    ),
  )
}
