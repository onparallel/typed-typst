// Converted from test/suite/corpus/closure-shadows-outer-var-for-loop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [vDecl, v_2] = let_('v', data([1, 2, 3]))
  const f = define('f')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let s = 0
    for v in v { s += v }
    s
  }`,
    )
  return doc(inline(codeBlock([vDecl, f.decl, test(f(), 6)])))
}
