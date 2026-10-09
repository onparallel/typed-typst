// Converted from test/universe/corpus/placard.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  colbreak,
  define,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  parbreak,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const card = define('card').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const placard = external('placard')
  const placard_with = define('with')
    .named('authors', T.any, null)
    .named('footer', T.any, null)
    .named('margin', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(placard)
  return doc(
    importPackage('@preview/placard:0.1.0', [card, placard]),
    show(
      placard_with({
        title: 'Poster Title',
        authors: ['Author 1', 'Author 2'],
        margin: { top: cm(3) },
        footer: { content: inline`Institute XYZ` },
      }),
    ),
    inline(card({ title: 'Abstract' }, blocks(inline(lorem(55)), parbreak()))),
    inline(colbreak()),
    inline(card({ title: 'Methodology' }, inline(space, lorem(20), space))),
  )
}
