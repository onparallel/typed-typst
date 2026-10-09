// Converted from test/universe/corpus/diatypst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blue,
  define,
  div,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  m,
  pct,
  show,
  strong,
} from '../../../src/index.ts'

export default () => {
  const slides = external('slides')
  const slides_with = define('with')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('layout', T.any, null)
    .named('ratio', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('title-color', T.any, null)
    .named('toc', T.any, null)
    .returns(T.any)
    .external(slides)
  return doc(
    importPackage('@preview/diatypst:0.9.3', [slides]),
    show(
      slides_with({
        title: 'Diatypst',
        subtitle: 'easy slides in typst',
        date: '01.07.2024',
        authors: 'Author Name',
        ratio: div(16, 9),
        layout: 'medium',
        titleColor: blue.darken(pct(60)),
        toc: true,
      }),
    ),
    m.heading(1, 'First Section'),
    m.heading(2, 'First Slide'),
    inline(lorem(20)),
    m.terms(m.term([strong(inline`Term`)], ['Definition'])),
  )
}
