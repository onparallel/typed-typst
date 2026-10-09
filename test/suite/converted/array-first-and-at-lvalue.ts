// Converted from test/suite/corpus/array-first-and-at-lvalue.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([1, 2, 3]))
  return doc(
    inline(
      codeBlock([
        arrayDecl,
        unsafeRaw.code<any>`array.first() = 7`,
        unsafeRaw.code<any>`array.at(1) *= 8`,
        test(array_2, [7, 16, 3]),
      ]),
    ),
  )
}
