// Converted from test/suite/corpus/let-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cm, define, doc, external, inline, let_, m, pt, rect, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [zDecl, z] = let_('z', 1)
  const conifer = external('conifer')
  const [fillDecl, fill] = let_('fill', conifer)
  const f = define('f')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => rect({ width: cm(2), fill: fill, inset: pt(5) }, p['body']))
  return doc(
    m.lines(unsafeRaw.markup`#let x`, inline(test(unsafeRaw.code<any>`x`, null))),
    m.lines(zDecl, inline(test(z, 1))),
    m.lines(fillDecl, f.decl, inline(f(inline`Hi!`))),
  )
}
