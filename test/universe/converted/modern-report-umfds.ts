// Converted from test/universe/corpus/modern-report-umfds.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  center,
  datetime,
  define,
  doc,
  em,
  external,
  horizon,
  importPackage,
  inline,
  lorem,
  luma,
  m,
  pagebreak,
  path,
  rect,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const umfds = external('umfds')
  const umfds_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('department', T.content, [])
    .named('img', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(umfds)
  return doc(
    importPackage('@preview/modern-report-umfds:0.1.2', [umfds]),
    show(
      umfds_with({
        title: inline(lorem(12)),
        authors: ['Author 1', 'Author 2', 'Author 3', 'Author 4'],
        department: inline`Some Department`,
        date: datetime.today().display('[day] [month repr:long] [year]'),
        img: rect(
          { width: em(15), height: em(15), fill: luma(240) },
          inline(
            space,
            align(add(center, horizon), inline(space, text({ size: em(2), weight: 'black' }, inline`Image`), space)),
            space,
          ),
        ),
        abstract: inline(space, lorem(100), space),
        lang: 'en',
      }),
    ),
    m.lines(m.heading(1, 'Section'), inline(lorem(50))),
    inline(lorem(20)),
    inline(lorem(40)),
    m.lines(m.heading(2, 'Sub-section'), inline(lorem(100))),
    m.lines(m.heading(3, 'Sub-subsection'), inline(lorem(50))),
    m.lines(m.heading(1, 'Section'), inline(lorem(200))),
    inline(pagebreak()),
    inline(bibliography({ full: true }, path('refs.bib'))),
  )
}
