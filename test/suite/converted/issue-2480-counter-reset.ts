// Converted from test/suite/corpus/issue-2480-counter-reset.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, context, counter, doc, grid, inline, let_, m, pagebreak, pt, space } from '../../../src/index.ts'

export default () => {
  const [qDecl, q] = let_('q', counter('question'))
  const [stepShowDecl, stepShow] = let_(
    'step-show',
    add(
      q.step(),
      context((ctx) => q.display(ctx, '1')),
    ),
  )
  const [gDecl, g] = let_('g', grid({ gutter: pt(2) }, stepShow, stepShow))
  return doc(
    m.lines(qDecl, stepShowDecl, gDecl),
    inline(g, space, pagebreak(), space, stepShow, space, q.update(10), space, g),
  )
}
