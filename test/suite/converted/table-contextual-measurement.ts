// Converted from test/suite/corpus/table-contextual-measurement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  context,
  counter,
  define,
  doc,
  inline,
  let_,
  m,
  square,
  table,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [cDecl, c] = let_('c', counter('c'))
  const [kDecl, k] = let_(
    'k',
    context((ctx) => square({ width: unsafeRaw.code<any>`c.get().first() * 5pt` })),
  )
  const u = define('u')
    .pos('n', T.any)
    .returns(T.any)
    .body((p) => add(inline(p['n']), c.update(p['n'])))
  return doc(m.lines(cDecl, kDecl, u.decl, inline(table({ columns: 3 }, u(1), k, u(2), k, u(4), k, k, k, k))))
}
