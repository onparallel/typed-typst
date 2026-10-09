// Converted from test/suite/corpus/issue-2480-counter-reset-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  codeBlock,
  context,
  counter,
  define,
  doc,
  inline,
  let_,
  m,
  pt,
  set,
  space,
  str,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  const foo = define('foo')
    .returns(T.any)
    .body((p) =>
      context((ctx) => codeBlock([c.step(), c.display(ctx, '1'), str(unsafeRaw.code<any>`c.get().first()`)])),
    )
  return doc(
    m.lines(set(block, { spacing: pt(3) }), cDecl, foo.decl),
    inline(
      foo(),
      space,
      block(foo()),
      space,
      foo(),
      space,
      foo(),
      space,
      block(foo()),
      space,
      block(foo()),
      space,
      foo(),
    ),
  )
}
