// Converted from test/suite/corpus/closure-shadows-outer-var.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 1)
  const f = define('f')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let x = x + 2
    x
  }`,
    )
  return doc(inline(codeBlock([xDecl, f.decl, test(f(), 3)])))
}
