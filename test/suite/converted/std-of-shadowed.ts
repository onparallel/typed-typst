// Converted from test/suite/corpus/std-of-shadowed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, grid, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [myGridDecl, myGrid] = let_('my-grid', grid(inline`a`, inline`b`))
  const [gridDecl, grid_2] = let_('grid', 'oh no!')
  return doc(m.lines(myGridDecl, gridDecl, inline(test(myGrid.func(), unsafeRaw.code<any>`std.grid`))))
}
