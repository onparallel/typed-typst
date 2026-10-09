// Converted from test/universe/corpus/project-isi-zac.typ by scripts/convert-suite.ts — do not edit.
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
  includeFile,
  inline,
  luma,
  m,
  path,
  rect,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const config = external('config')
  const config_with = define('with')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('display', T.any, null)
    .named('img', T.any, null)
    .named('title', T.content, [])
    .named('uni-info', T.any, null)
    .returns(T.any)
    .external(config)
  return doc(
    importPackage('@preview/project-isi-zac:0.1.0', [config]),
    show(
      config_with({
        display: ['title-page', 'toc'],
        title: inline`Crazy Good Thesis Title`,
        authors: ['Author 1', 'Author 2'],
        uniInfo: {
          department: inline`Some Department`,
          university: inline`University name`,
          faculty: inline`Faculty Name`,
          academic_year: '2024/2025',
        },
        date: datetime.today().display('[day] [month repr:long] [year]'),
        img: rect(
          { width: em(20), height: em(10), fill: luma(240) },
          inline(
            space,
            align(add(center, horizon), inline(space, text({ size: em(2), weight: 'black' }, inline`Image`), space)),
            space,
          ),
        ),
      }),
    ),
    m.lines(
      includeFile('chapters/chapter-1.typ'),
      includeFile('chapters/chapter-2.typ'),
      includeFile('chapters/conclusions.typ'),
    ),
    inline(bibliography({ style: 'apa' }, path('refs.bib'))),
  )
}
