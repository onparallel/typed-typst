// Converted from test/suite/corpus/issue-non-atomic-closure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const [xDecl, x] = let_('x', 1)
  const [cDecl, c] = let_('c', inline`${x} => (1, 2)`)
  return doc(m.lines(xDecl, cDecl, inline`${test(unsafeRaw.code<any>`c.children.last()`, inline`(1, 2)`)})`))
}
