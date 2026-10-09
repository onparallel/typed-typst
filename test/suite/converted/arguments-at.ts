// Converted from test/suite/corpus/arguments-at.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, define, doc, inline, let_, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [argsDecl, args] = let_('args', arguments_({ a: 2 }, 0, 1, 3))
  return doc(
    m.lines(
      argsDecl,
      inline(test(args.at(0), 0), space, test(args.at(1), 1), space, test(args.at(2), 3), space, test(args.at('a'), 2)),
    ),
  )
}
