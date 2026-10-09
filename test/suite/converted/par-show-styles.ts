// Converted from test/suite/corpus/par-show-styles.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, let_, m, metadata, par, set, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [revokeDecl, revoke] = let_('revoke', metadata('revoke'))
  return doc(
    m.lines(
      revokeDecl,
      show(
        par,
        (it, ctx) => unsafeRaw.code<any>`{
  if bibliography.title == revoke { return it }
  set bibliography(title: revoke)
  let p = counter("p")
  par[#p.step()§#context p.display() #it.body]
}`,
      ),
    ),
    m.heading(1, 'A'),
    'B',
    'C',
  )
}
