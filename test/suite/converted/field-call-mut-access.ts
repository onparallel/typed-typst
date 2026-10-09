// Converted from test/suite/corpus/field-call-mut-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [matrixDecl, matrix] = let_(
    'matrix',
    data([
      [[1], [2]],
      [[3], [4]],
    ]),
  )
  return doc(
    inline(
      codeBlock([
        matrixDecl,
        unsafeRaw.code<any>`matrix.at(1).at(0).push(5)`,
        test(matrix, [
          [[1], [2]],
          [[3, 5], [4]],
        ]),
      ]),
    ),
  )
}
