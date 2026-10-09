// Converted from test/suite/corpus/call-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  codeBlock,
  contentBlock,
  define,
  doc,
  external,
  inline,
  m,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = external('test')
  const f = define('f')
    .returns(T.any)
    .body((p) => codeBlock([]))
  const f_2 = define('f')
    .pos('x', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => (y) => add(add(inline(p['x']), p['body']), inline(y)))
  const f_3 = define('f')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => p['body'])
  const g = define('g')
    .pos('a', T.any)
    .pos('b', T.any)
    .returns(T.any)
    .body((p) => add(p['a'], p['b']))
  return doc(
    m.lines(f.decl, inline(contentBlock(inline(f(), strong(inline`Bold`))))),
    m.lines(f_2.decl, inline(unsafeRaw.code<any>`f(1)[2](3)`)),
    inline`${test} (it)`,
    m.lines(f_3.decl, inline(f_3(inline`A`), space, f_3(inline`A`), space, f_3(inline`A`))),
    m.lines(g.decl, inline(g(inline`A`, inline`B`), space, g(inline`A`, inline`B`), space, g(inline`A`, inline`B`))),
  )
}
