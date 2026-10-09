// Converted from test/suite/corpus/return-in-content-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 3)
  const f = define('f').body((p) => inline`${space}Hello 😀 ${unsafeRaw.code<any>`return "nope"`} World${space}`)
  return doc(m.lines(xDecl, f.decl), inline(test(f(), 'nope')))
}
