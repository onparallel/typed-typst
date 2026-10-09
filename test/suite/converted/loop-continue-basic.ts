// Converted from test/suite/corpus/loop-continue-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [iDecl, i] = let_('i', 0)
  const [xDecl, x] = let_('x', 0)
  return doc(
    m.lines(iDecl, xDecl),
    inline(unsafeRaw.code<any>`while x < 8 {
  i += 1
  if calc.rem(i, 3) == 0 {
    continue
  }
  x += i
}`),
    inline(test(x, 12)),
  )
}
