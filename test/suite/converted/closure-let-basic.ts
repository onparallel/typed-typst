// Converted from test/suite/corpus/closure-let-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [gDecl, g] = let_('g', 'hi')
  const f = define('f')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let g() = "bye"
    g()
  }`,
    )
  return doc(inline(codeBlock([gDecl, f.decl, test(f(), 'bye')])))
}
