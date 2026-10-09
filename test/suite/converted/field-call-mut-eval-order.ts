// Converted from test/suite/corpus/field-call-mut-eval-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [pairDecl, pair] = let_('pair', data([1, 2]))
  const [arraysDecl, arrays] = let_('arrays', data([[], [], []]))
  return doc(
    inline(
      codeBlock([
        pairDecl,
        arraysDecl,
        unsafeRaw.code<any>`arrays.at(pair.remove(0)).push(pair.remove(0))`,
        test(arrays, [[], [], [1]]),
      ]),
    ),
  )
}
