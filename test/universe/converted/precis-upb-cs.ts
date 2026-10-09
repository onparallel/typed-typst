// Converted from test/universe/corpus/precis-upb-cs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cm,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  label,
  lorem,
  m,
  path,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const upbThesis = external('upb-thesis')
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  const synopsis = define('synopsis').pos('arg1', T.content).returns(T.any).external()
  const upbThesis_with = define('with')
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('langs', T.any, null)
    .named('logo-left', T.any, null)
    .named('logo-right', T.any, null)
    .named('project-type', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(upbThesis)
  return doc(
    importPackage('@preview/precis-upb-cs:0.1.0', [upbThesis, abstract, synopsis]),
    show(
      upbThesis_with({
        langs: ['en', 'ro'],
        title: { en: 'Title', ro: 'Titlu' },
        subtitle: { en: 'Subtitle', ro: 'Subtitlu' },
        author: 'Author',
        advisor: 'Advisor',
        year: '2026',
        projectType: { en: 'DIPLOMA PROJECT', ro: 'PROIECT DE DIPLOMĂ' },
        logoLeft: image({ width: cm(3) }, path('images/logo-university.png')),
        logoRight: image({ width: cm(5) }, path('images/logo-faculty.png')),
      }),
    ),
    inline(synopsis(inline`${space}Lorem Ipsum${space}`)),
    inline(abstract(inline`${space}Lorem Ipsum${space}`)),
    m.heading(1, 'Introduction'),
    inline(lorem(80)),
    m.heading(1, 'Related Work'),
    inline(lorem(30), space, ref(label('example2024')), space, lorem(30)),
    m.heading(1, 'Conclusion'),
    inline(lorem(40)),
    inline(bibliography({ title: 'References', style: 'ieee' }, path('refs.bib'))),
  )
}
