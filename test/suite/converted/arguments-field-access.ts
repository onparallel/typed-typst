// Converted from test/suite/corpus/arguments-field-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [argsDecl, args] = let_('args', arguments_({ a: 2, b: arguments_({ c: 4 }, 5) }, 0, 1, 3))
  return doc(
    m.lines(
      argsDecl,
      inline(
        test(unsafeRaw.code<any>`args.a`, 2),
        space,
        test(unsafeRaw.code<any>`args.b`, arguments_({ c: 4 }, 5)),
        space,
        test(unsafeRaw.code<any>`args.b.c`, 4),
        space,
        test(unsafeRaw.code<any>`args.b.at(0)`, 5),
        space,
        test(unsafeRaw.code<any>`args.b.at("c")`, 4),
        space,
        test(unsafeRaw.code<any>`args.at("b").c`, 4),
      ),
    ),
  )
}
