// Converted from test/suite/corpus/math-call-named-spread-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, define, doc, inline, let_, m, repr, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const check = define('check')
    .pos('it', T.any)
    .pos('s', T.any)
    .returns(T.any)
    .body((p) => test(unsafeRaw.code<any>`it.body.text`, repr(p['s'])))
  const func = define('func')
    .named('a', T.any, 1)
    .named('b', T.any, 1)
    .returns(T.any)
    .body((p) => ({ a: p['a'], b: p['b'] }))
  const [dictDecl, dict_2] = let_('dict', { a: 2, b: 2 })
  const [argsDecl, args] = let_('args', arguments_({ a: 3, b: 3 }))
  return doc(
    m.lines(
      check.decl,
      func.decl,
      dictDecl,
      argsDecl,
      inline(
        check(unsafeRaw.math`func()`, { a: 1, b: 1 }),
        space,
        check(unsafeRaw.math`func(..dict, ..args)`, { a: 3, b: 3 }),
        space,
        check(unsafeRaw.math`func(..args, ..dict)`, { a: 2, b: 2 }),
        space,
        check(unsafeRaw.math`func(a: #4, ..dict, b: #4)`, { a: 2, b: 4 }),
        space,
        check(unsafeRaw.math`func(a: #4, ..args, b: #4)`, { a: 3, b: 4 }),
      ),
    ),
  )
}
