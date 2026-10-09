// Converted from test/suite/corpus/issue-math-realize-scripting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const foo = define('foo')
    .pos('v1', T.any)
    .pos('v2', T.any)
    .returns(T.any)
    .body((p) => codeBlock([], unsafeRaw.math`v1 v2^2`))
  const bar = define('bar')
    .pos('v1', T.any)
    .pos('v2', T.any)
    .returns(T.any)
    .body((p) => codeBlock([], unsafeRaw.math.block`v1 v2^2`))
  const baz = define('baz')
    .rest('sink', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  // Return an equation piece built by joining arrays
  sink.pos().map(x => $hat(#x)$).join(sym.and)
}`,
    )
  return doc(
    m.lines(foo.decl, bar.decl, baz.decl),
    inline`Inline ${unsafeRaw.math`2 foo(alpha, (M+foo(a, b)))`}.`,
    inline`Inline ${unsafeRaw.math`2 bar(alpha, (M+foo(a, b)))`}.`,
    inline`Inline ${unsafeRaw.math`2 baz(x,y,baz(u, v))`}.`,
    inline(
      unsafeRaw.math.block`2 foo(alpha, (M+foo(a, b)))`,
      space,
      unsafeRaw.math.block`2 bar(alpha, (M+foo(a, b)))`,
      space,
      unsafeRaw.math.block`2 baz(x,y,baz(u, v))`,
    ),
  )
}
