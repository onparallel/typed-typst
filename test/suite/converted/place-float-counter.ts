// Converted from test/suite/corpus/place-float-counter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bottom,
  colbreak,
  context,
  counter,
  define,
  doc,
  inline,
  let_,
  line,
  m,
  page,
  pct,
  place,
  pt,
  set,
  space,
  top,
} from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  const [cdDecl, cd] = let_(
    'cd',
    context((ctx) => c.display(ctx)),
  )
  const t = define('t')
    .pos('align', T.any)
    .named('scope', T.any, 'column')
    .pos('n', T.any)
    .returns(T.any)
    .body((p) =>
      place(
        { float: true, scope: p['scope'], clearance: pt(10) },
        p['align'],
        add(line({ length: pct(100) }), c.update(p['n'])),
      ),
    )
  return doc(
    m.lines(cDecl, cdDecl),
    set(page, {
      height: pt(100),
      margin: { y: pt(20) },
      header: inline`H: ${cd}`,
      footer: inline`F: ${cd}`,
      columns: 2,
    }),
    t.decl,
    inline(
      t(bottom, 6),
      space,
      cd,
      space,
      t(top, 3),
      space,
      colbreak(),
      space,
      cd,
      space,
      t({ scope: 'parent' }, bottom, 11),
      space,
      colbreak(),
      space,
      cd,
      space,
      t(top, 12),
    ),
  )
}
