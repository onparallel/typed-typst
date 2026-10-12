// Converted from test/suite/corpus/par-show-styles.typ by scripts/convert-suite.ts — do not edit.
import { bibliography, doc, heading, inline, let_, m, metadata, par, set, show, unsafeRaw } from '../../../src/index.ts'

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
    heading({ depth: 1 }, inline('A')),
    'B',
    'C',
  )
}
