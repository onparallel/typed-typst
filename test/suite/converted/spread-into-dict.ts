// Converted from test/suite/corpus/spread-into-dict.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', { a: 1 })
  const [yDecl, y] = let_('y', { b: 2 })
  const [zDecl, z] = let_('z', { a: 3 })
  return doc(
    inline(
      codeBlock([
        xDecl,
        yDecl,
        zDecl,
        test(unsafeRaw.code<any>`(:..x, ..y, ..z)`, { a: 3, b: 2 }),
        test(unsafeRaw.code<any>`(..(a: 1), b: 2)`, { a: 1, b: 2 }),
      ]),
    ),
  )
}
