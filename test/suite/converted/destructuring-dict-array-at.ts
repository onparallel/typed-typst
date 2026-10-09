// Converted from test/suite/corpus/destructuring-dict-array-at.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [arrayDecl, array_2] = let_('array', data([1, 2, 3, 4]))
  return doc(
    inline(
      codeBlock([
        arrayDecl,
        unsafeRaw.code<any>`(test: array.at(1), best: _) = (test: "baz", best: "brr")`,
        test(array_2, [1, 'baz', 3, 4]),
      ]),
    ),
  )
}
