// Converted from test/suite/corpus/while-loop-expr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, content, define, doc, inline, let_, m, type, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [iDecl, i] = let_('i', 0)
  return doc(
    inline(test(unsafeRaw.code<any>`while false {}`, null)),
    m.lines(iDecl, inline(test(type(unsafeRaw.code<any>`while i < 1 [#(i += 1)]`), content))),
  )
}
