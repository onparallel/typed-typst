// Converted from test/suite/corpus/array-negative-indices.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([1, 2, 3, 4]))
  return doc(
    inline(
      codeBlock([
        arrayDecl,
        test(array_2.at(0), 1),
        test(array_2.at(-1), 4),
        test(array_2.at(-2), 3),
        test(array_2.at(-3), 2),
        test(array_2.at(-4), 1),
      ]),
    ),
  )
}
