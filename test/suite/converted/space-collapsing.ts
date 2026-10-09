// Converted from test/suite/corpus/space-collapsing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, linebreak, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [xDecl, x] = let_('x', 1)
  const [xDecl_2, x_2] = let_('x', 2)
  const [cDecl, c] = let_('c', true)
  const [cDecl_2, c_2] = let_('c', true)
  const [fooDecl, foo] = let_('foo', 'A')
  return doc(inline`A${xDecl}B ${test(x, 1)} ${linebreak()} C ${xDecl_2}D ${test(x_2, 2)} ${linebreak()} E${unsafeRaw.code<any>`if true [F]`}G
${linebreak()} H ${unsafeRaw.code<any>`if true{"I"}`} J ${linebreak()} K ${unsafeRaw.code<any>`if true [L] else []`}M
${linebreak()} ${cDecl} N${unsafeRaw.code<any>`while c [#(c = false)O]`} P ${linebreak()} ${cDecl_2}
Q ${unsafeRaw.code<any>`while c { c = false; "R" }`} S ${linebreak()} T${unsafeRaw.code<any>`for _ in (none,) {"U"}`}V
${fooDecl} ${linebreak()} ${foo}B ${linebreak()} ${foo} B ${linebreak()} ${foo} ;B`)
}
