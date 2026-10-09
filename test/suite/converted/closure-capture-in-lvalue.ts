// Converted from test/suite/corpus/closure-capture-in-lvalue.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', 'b')
  const f = define('f')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let a = (b: 5)
  a.at(x) = 10
  a
}`,
    )
  return doc(m.lines(xDecl, f.decl, inline(f())))
}
