// Converted from test/suite/corpus/spread-into-array.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, range, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [lDecl, l] = let_('l', data([1, 2, 3]))
  const [rDecl, r] = let_('r', data([5, 6, 7]))
  return doc(
    inline(
      codeBlock([
        lDecl,
        rDecl,
        test(unsafeRaw.code<any>`(..l, 4, ..r)`, range(1, 8)),
        test(unsafeRaw.code<any>`(..none)`, []),
      ]),
    ),
  )
}
