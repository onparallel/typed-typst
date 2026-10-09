// Converted from test/suite/corpus/closure-let-args.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 5)
  const g = define('g')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let f(x, y: x) = x + y
    f
  }`,
    )
  return doc(inline(codeBlock([xDecl, g.decl, test(unsafeRaw.code<any>`g()(8)`, 13)])))
}
