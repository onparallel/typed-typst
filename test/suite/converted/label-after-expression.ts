// Converted from test/suite/corpus/label-after-expression.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, label, labelled, let_, m, space, strong, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [aDecl, a] = let_('a', inline(strong(inline`A`)))
  const [bDecl, b] = let_('b', inline(strong(inline`B`)))
  return doc(
    unsafeRaw.markup`#show strong.where(label: <v>): set text(red)`,
    m.lines(aDecl, bDecl, inline(labelled([a, space], label('v')), space, b)),
  )
}
