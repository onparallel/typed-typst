// Converted from test/suite/corpus/arguments-at-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, arguments_, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [argsDecl, args] = let_(
    'args',
    arguments_({ func: (x_2) => add(x_2, 2) }, (x) => add(x, 1)),
  )
  return doc(
    m.lines(
      argsDecl,
      inline(test(unsafeRaw.code<any>`args.at(0)(0)`, 1), space, test(unsafeRaw.code<any>`args.at("func")(0)`, 2)),
    ),
  )
}
