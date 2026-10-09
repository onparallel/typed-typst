// Converted from test/universe/corpus/bananote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  m,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const note = external('note')
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  const note_with = define('with')
    .named('authors', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(note)
  return doc(
    m.lines(
      importPackage('@preview/bananote:0.1.2', [note, abstract]),
      unsafeRaw.markup`#import "@preview/pergamon:0.7.1": *`,
    ),
    show(note_with({ title: inline`My Research Note`, authors: [[inline`My Name`, inline`My Affiliation`]] })),
    inline(abstract(inline(space, lorem(50), space))),
    m.heading(1, 'Introduction'),
    inline(lorem(50)),
    m.heading(2, 'Subsection'),
    inline(lorem(50)),
    m.heading(1, 'Another Section'),
    inline(lorem(50)),
  )
}
