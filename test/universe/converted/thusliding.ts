// Converted from test/universe/corpus/thusliding.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  define,
  div,
  doc,
  external,
  heading,
  importPackage,
  inline,
  lorem,
  m,
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
    .named('toc', T.any, null)
    .returns(T.any)
    .external(slides)
  return doc(
    importPackage('@preview/thusliding:0.0.1', [slides]),
    show(
      slides_with({
        title: 'Tsinghua University',
        subtitle: 'The best university in China',
        date: '01.07.2024',
        authors: { name: 'Your Name', affiliation: 'Some information' },
        ratio: div(16, 9),
        layout: 'medium',
        toc: true,
      }),
    ),
    m.lines(
      heading({ depth: 1 }, inline('First Section')),
      heading({ depth: 2 }, inline('First Slide')),
      inline(lorem(20)),
      m.terms(m.term([strong(inline`Term`)], ['Definition'])),
      inline(lorem(20)),
    ),
    m.lines(heading({ depth: 2 }, inline('Second Slide')), inline(lorem(200))),
  )
}
