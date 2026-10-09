// Converted from test/suite/corpus/counter-label.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, context, counter, define, doc, inline, label, let_, linebreak, m, space } from '../../../src/index.ts'

export default () => {
  const [labelDecl, label_2] = let_('label', label('heya'))
  const [countDecl, count] = let_(
    'count',
    context((ctx) => counter(label_2).display(ctx)),
  )
  const elem = define('elem')
    .pos('it', T.any)
    .body((p) => inline(box(p['it']), space, label_2))
  return doc(
    m.lines(labelDecl, countDecl, elem.decl),
    inline(elem(inline`hey, there!`), space, count, space, linebreak(), space, elem(inline`more here!`), space, count),
  )
}
